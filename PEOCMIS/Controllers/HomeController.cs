    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
using System.IO;
using System.Linq;
    using System.Threading.Tasks;
    using DAL.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using PEOCMIS.Infrastructure;
    using PEOCMIS.Models;
    using PEOCMIS.Security;

    // For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

    namespace PEOCMIS.Controllers
    {
        public class HomeController : Controller
        {
            private readonly ILogger<HomeController> _logger;

            private readonly IPeocmisRepo _repo;

        private readonly IWebHostEnvironment _hostEnvironment;

        public HomeController(ILogger<HomeController> logger, IPeocmisRepo Repo, IWebHostEnvironment hostEnvironment)
            {
                _logger = logger;
                _repo = Repo;
            this._hostEnvironment = hostEnvironment; // to upload picture extra paramter added
        }
        // GET: /<controller>/
        [AuthorizedAction]
        public IActionResult Index()
            {
                return View("Index", "Master_page");
            }

        [AuthorizedAction]
        public IActionResult QuickLinks()
        {
            return View("QuickLinks", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult EmergencyContct()
        {
            return View("EmergencyContct", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult EvacuationCenter()
        {
            return View("EvacuationCenter", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult UploadRiskAsmnt()
        {
            return View("UploadRiskAsmnt", "Master_page");
        }


        [AuthorizedAction]
        public IActionResult Flyers()
        {
            return View("Flyers", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult UserInfoAsmnt()
        {
            return View("UserInfo", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult ComplaintsAsmnt()
        {
         
            return View("Complaints", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult TehsilAsmnt()
        {
            return View("Tehsil", "Master_page");
        }

        [AuthorizedAction]
        public IActionResult Districtcnt()
        {
            // ViewBag.JavaScriptFunction = string.Format("ShowGreetings('{0}');", "Irfan");


          //  Distritt();

            return View("District", "Master_page");
        }




        [HttpPost]
        public ActionResult Distritt()
        {
             ViewBag.JavaScriptFunction = string.Format("ShowGreetings('{0}');", "Irfan");
            
          
            return View("District", "Master_page");
        }





        [AuthorizedAction]
        public IActionResult LogDetails()
            {
                return View("LogDetails", "Master_page");
            }
            public IActionResult Privacy()
            {
                return View();
            }

            [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
            public IActionResult Error()
            {
                return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
            }

            public IActionResult Login()
            {
                return View();
            }
            public IActionResult SignUp()
            {
                return View();
            }



        [AuthorizedAction]
        public IActionResult ComplaintDetails()
        {
            return View("ComplaintDetails", "Master_page");
        }

        public JsonResult SigInAction(UserLogin login)
            {
                var result = _repo.FnLogin(login);
            
                string text = "success";
                if (result == null || result.Id== 0)
                    text = "error";
                else
                    HttpContext.Session.SetString("Id", result.Id.ToString());
                return Json(new { message = text, result = result });

            }

        // Emergency Contacts
        public JsonResult InsertEmergencyContactAction(MEmergencyContact Ercnt)
        {
            var result = _repo.FnEmrCnt(Ercnt);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult GetEmergencyContactAction()
        {
            var result = _repo.FnGetEmrCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult DeleteEmergencyContactAction(int PK)
        {
            var result = _repo.FnDeltEmrCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        public JsonResult GetDistrictsAction()
        {
            var result = _repo.FnGetDistricts();

            string text = "success";
            if (result == null)
                text = "error";


            return Json(new { message = text, result = result });

        }



        // Quick Links
        public JsonResult InsertQuickLinksAction(MQuickLinks QLink)
        {
            var result = _repo.FnQuicklinkCnt(QLink);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult DeleteQuickLinksAction(int PK)
        {
            var result = _repo.FnDeltQuickLinkCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        public JsonResult GetQuickLinksAction()
        {
            var result = _repo.FnGetQuickCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        // EvacuationCenter


        public JsonResult InsertEvacuationCenterAction(MEvacuationCenter Eva)
        {
            var result = _repo.FnEvacuationCenterCnt(Eva);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult GetEvacuationCenterAction(string Type)
        {
            var result = _repo.FnGetEvacuationCenter( Type);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult DeleteEvacuationCentersAction(int PK)
        {
            var result = _repo.FnEvacuationCentersCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        // UserInfo
        public JsonResult UpdateEvacuationCenterAction(int PK, int Status)
        {
            var result = _repo.FnUpdateEvacuationCenter(PK, Status);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        // UserInfo
        public JsonResult GetUserInfoAction(string type)
        {
            var result = _repo.FnGetUserInfoCenter(type);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        // UserInfo
        public JsonResult UpdateUserInfoAction(int UserId,int Status)
        {
            var result = _repo.FnUpdateUserInfo(UserId, Status);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        // Get Complaint
        public JsonResult GetComplaintAction(string type)
        {
            var result = _repo.FnGetComplaintCenter();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }



        // District
        public JsonResult InsertDistrictAction(string distt)
        {
            var result = _repo.FnDistCnt(distt);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        

        }


        public JsonResult DeleteDistrictAction(int PK)
        {
            var result = _repo.FnDeltDistrictCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }




        // Tehsil


        // UserInfo
        public JsonResult GetTehsilAction()
        {
            var result = _repo.FnGetTeshilCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult InsertTehsillAction(string tehsil, int distid)
        {
            var result = _repo.FnTehsilCnt(tehsil, distid);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        public JsonResult DeletTehsilAction(int PK)
        {
            var result = _repo.FnDeltTehsilCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }




        public JsonResult MultiList(string district, string disastertype, string section)
            {
                
            
            
            return Json(_repo.LogsView( district, disastertype, section).ToList());
            }

            public JsonResult ActionLogdetails(int logId)
            {

            var result= Json(_repo.LogsDetails(logId).ToList());
            return result;
            }



        // UserInfo
        public JsonResult GetLogsDetailAction(int logId)
        {
            var result =Json( _repo.FnLogDetailCenter(logId));

         
            return result;

        }


        // upload picture

            
        [HttpPost]
        public async Task<IActionResult> InsertRiskAssesmentAction( MRiskAssesment imageModel)
        {
            if (ModelState.IsValid)
            {
                //Save image to wwwroot/image
                string wwwRootPath = _hostEnvironment.WebRootPath;
                string fileName = Path.GetFileNameWithoutExtension(imageModel.ImageFile.FileName);

                string extension = Path.GetExtension(imageModel.ImageFile.FileName);

                imageModel.ImageName = fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                imageModel.Typee = extension;

                string path = Path.Combine(wwwRootPath + "/DisasterImages/", fileName);


                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await imageModel.ImageFile.CopyToAsync(fileStream);
                }

                var result = _repo.FnRiskAssesmentCnt(imageModel);


                //Insert record
                //    _context.Add(imageModel);
                //  await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(imageModel);
        }


        public JsonResult GetReiskassesmentAction()
        {
            var result = _repo.FnGetRiskAssmentCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        public JsonResult GetFlyersAction()
        {
            var result = _repo.FnGetFlyersCnt();

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        public JsonResult GetRDImgagesAction(int logid)
        {
            var result = _repo.FnGetRDImagesCnt(logid);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }


        public JsonResult GetResponseAction(int logid)
        {
            var result = _repo.FnGetRDActions(logid);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }

        public JsonResult ReiskassesmentAction(int PK)
        {
            var result = _repo.FnDeleteRiskAssmentCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }



        // Flyers... 


        [HttpPost]
        public async Task<IActionResult> InsertFlyersAction(MFlyers imageModel)
        {
            if (ModelState.IsValid)
            {
                //Save image to wwwroot/image
                string wwwRootPath = _hostEnvironment.WebRootPath;
                string fileName = Path.GetFileNameWithoutExtension(imageModel.ImageFile.FileName);

                string extension = Path.GetExtension(imageModel.ImageFile.FileName);

                imageModel.ImageName = fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
              

                string path = Path.Combine(wwwRootPath + "/Flyers/", fileName);


                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await imageModel.ImageFile.CopyToAsync(fileStream);
                }

                var result = _repo.FnFlyersCnt(imageModel);


                //Insert record
                //    _context.Add(imageModel);
                //  await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(imageModel);
        }


        public JsonResult DeleteFlyersAction(int PK)
        {
            var result = _repo.FnFlyersCnt(PK);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }



        // Push notifincation experitment

        [HttpPost]
        public ActionResult Complaints()
        {
          
                ViewBag.JavaScriptFunction = string.Format("ShowGreetings();");
            
      
            return View();
        }


        public JsonResult GetComplaintDetailAction(int CompID)
        {
            var result = Json(_repo.FnComplantDetailCenter(CompID));


            return result;

        }


 
        public JsonResult InsertActionDetailAction(MComplaintAction QLink)
        {
            var result = _repo.FnComplaintActionCnt(QLink);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }




        public JsonResult InsertResponseAction(MComplaintAction QLink)
        {
            var result = _repo.FnResponseActionCnt(QLink);

            string text = "success";
            if (result == null)
                text = "error";
            return Json(new { message = text, result = result });

        }
    }
}
