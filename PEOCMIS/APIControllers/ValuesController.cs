using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DAL.Models;
using DAL.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using PEOCMIS.Infrastructure;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PEOCMIS.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly IPeocmisRepo _repo;
        private readonly IWebHostEnvironment _appEnvironment;
        [Obsolete]
        private readonly IHostingEnvironment hostingEnvironment;

        [Obsolete]
        public ValuesController(IPeocmisRepo Repo, IWebHostEnvironment hostEnvironment,
             IHostingEnvironment hostingEnvironment)
        {
            _repo = Repo;
            _appEnvironment = hostEnvironment;
            this.hostingEnvironment = hostingEnvironment;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [Route("GetDSR")]
        [HttpGet(Name = "GetDSR")]
        public JsonResult ShowDSR(string CDate,string From,string To)
        {

            var result = _repo.dSRShow(CDate,From,To).ToList();
           
            //return Json(_repo.dSRShow(dSR).ToList());
            return Json(new { contacts = result });
        }
        [Route("InsertResponse")]
        [HttpPost(Name = "InsertResponse")]
        public IActionResult GetResonse([FromBody] logView logView)
        {
            var result = _repo.LogsInsertion(logView.logs);
            int lastId = _repo.Logs();
            string text = "success";
            if (result == null)
            {
                text = "Opearation failed";
            }

           var res= logView.logs.LogPK;
            foreach (var item in logView.responseTables)
            {
                item.FK = lastId;
            }
            var resultResponse = _repo.InsertResponse(logView.responseTables);

            if (resultResponse > 0)
            {
                return Ok(new { message = logView.responseTables.Count + " of " + result, lastId = lastId });
            }

            return BadRequest("error ");
        }
        [Route("InsertResponseMedia")]
        [HttpPost(Name = "InsertResponseMedia")]

        //[Consumes("application/pdf", "image/jpg", "image/jpeg", "image/png", "image/tiff", "image/tif" )]
        //[Consumes("application/octet-stream", "application/pdf", "image/jpg", "image/jpeg", "image/png", "image/tiff", "image/tif")] // doesn't work either
        public IActionResult DisasterMedia(DisasterMedia disasterMedia)
        {

            List<ResponseTable> disasterMedias = new List<ResponseTable>();
            var varName = 1;
            for (int i = 0; i < disasterMedia.Response.Length; i++)
            {


                var fileName = Path.GetFileName(disasterMedia.Response.FileName);
                //var extension = Path.GetExtension(fileName);

                //int lastIndex = fileName.LastIndexOf('.');
                //var name = fileName.Substring(0, lastIndex);
                //var ext = fileName.Substring(lastIndex + 1);

                //var fileNameNew = disasterMedia.FK+"P"+varName + extension;

                // yield return new ValidationResult("File extension is not valid.");

                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/DisasterImages2/", fileName);


                using (var fileSteam = new FileStream(filePath, FileMode.Create))
                {
                    disasterMedia.Response.CopyToAsync(fileSteam);
                }

                var imagepath = disasterMedia.VarName = "wwwroot/DisasterImages2/" + fileName;

                var disasterMediasinsert = new ResponseTable();

                disasterMediasinsert.Response = imagepath;

                disasterMediasinsert.FK = disasterMedia.FK;
                disasterMediasinsert.VarName = "P" + varName;

                disasterMedias.Add(disasterMediasinsert);

                varName++;
            }

            var resultResponse = _repo.InsertResponse(disasterMedias);

            if (resultResponse > 0)
            {
                return Ok(new { message = resultResponse + " of " + " Record Inserted" });
            }

            return BadRequest("error ");
        }

        [Route("UploadImage")]
        [HttpPost(Name = "UploadImage")]
        //[RequestFormLimits(ValueLengthLimit = int.MaxValue, MultipartBodyLengthLimit = int.MaxValue)]
        public IActionResult UploadImage(DisasterMedia disasterMedia)
        {
            var varName = 1;
            string uniqueFileName = null;
            List<ResponseTable> disasterMedias = new List<ResponseTable>();
            if (disasterMedia.Response != null)
            {
                string uploadsFolder = Path.Combine(_appEnvironment.WebRootPath, "DisasterImages2");
                uniqueFileName = Guid.NewGuid().ToString() + "_" + disasterMedia.Response.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    disasterMedia.Response.CopyTo(fileStream);
                }
                var imagepath = disasterMedia.VarName = "wwwroot/DisasterImages2/" + uniqueFileName;

                var disasterMediasinsert = new ResponseTable();

                disasterMediasinsert.Response = imagepath;

                disasterMediasinsert.FK = disasterMedia.FK;
                disasterMediasinsert.VarName = "P" + varName;

                disasterMedias.Add(disasterMediasinsert);

                varName++;
            }
            var resultResponse = _repo.InsertResponse(disasterMedias);

            if (resultResponse > 0)
            {
                return Ok(new { message = resultResponse + " of " + " Record Inserted" });
            }

            return BadRequest("error ");
        }
    

        [Route("GetAdvisories")]
        [HttpGet(Name = "GetAdvisories")]
        public JsonResult GetAdvisories()
        {

            var result = _repo.Dvisories().ToList();

            return Json(new { Advisories = result });
        }

        //Sign up function
        [Route("Signup")]
        [HttpPost(Name ="Signup")]
        public IActionResult Signup([FromBody] Signup signup)
        {
            var result = _repo.FnSignup(signup);
            string text = "Success";
            int lastId = 0;

            if (result=="Success")
            {
                 lastId = _repo.Signup();

            }
            if (result == null)
            {
                text = "Opearation failed";
            }
            else if (result == "error")
            {
                text = "Already Reserved";
            }
            return Json(new { message = text , lastId = lastId });
        }
        //end
        [Route("Signin")]
        [HttpPost(Name = "Signin")]
        public IActionResult FnLogin([FromBody] UserLogin login)

        {
            var result = _repo.FnLogin(login);
            string text = "Success";
            if (result == null)
            {
                text = "Invalid email and password!";
                return Json(new { message = text, id = -1 });

            }

            return Json(new { message=text,id=result.Id});

        }


      // get Emergency Contacts from DB
        [Route("GetEmergencyContact")]
        [HttpPost(Name = "GetEmergencyContact")]
        public JsonResult GetEmergencyContactAction()
        {
            var result = _repo.FnGetEmrCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        // get QuickLinks from DB
        [Route("GetQuickLinksAction")]
        [HttpPost(Name = "GetQuickLinksAction")]
        public JsonResult GetQuickLinksAction()
        {
            var result = _repo.FnGetQuickCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        // Get EvacuationCenters

        [Route("GetEvacuationCenterAction")]
        [HttpPost(Name = "GetEvacuationCenterAction")]
        public JsonResult GetEvacuationCenterAction()
        {
            var result = _repo.FnGetEvacuationCenter();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        [Route("DWRGet")]
        [HttpGet(Name = "DWRGet")]
        public JsonResult DWRGet()

        {
            var result = _repo.DWRViews().ToList();

            return Json(new { message = result });
        }
            [Route("DWRGetbyDate")]
            [HttpPost(Name = "DWRGetbyDate")]
            public JsonResult DWRGetbyDate(string date)

            {
                var resultDate = _repo.DWRViewsBydate(date).ToList();

            return Json(new { message = resultDate });
        }
    }
}
