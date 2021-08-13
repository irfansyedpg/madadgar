using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
namespace DAL.Models
{
    public class DisasterMedia
    {
        [Key]
        public int AppPK { get; set; }
        public int FK { get; set; }
        public string VarName { get; set; }
        public IFormFile Response { get; set; }

    }
}
 