using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class MRDImage
    {
        [Key]
        public int PK { get; set; }
        public string Path { get; set; }
        public int LogId { get; set; }
     
        [NotMapped]
        [DisplayName("Upload File")]
        public IFormFile ImageFile { get; set; }

    }
}
