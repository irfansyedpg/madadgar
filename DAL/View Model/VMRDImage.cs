using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.ViewModel
{
    public class VMRDImage
    {

        [Key]
        public int PK { get; set; }
        public string Path { get; set; }
        public int LogId { get; set; }

    }
}
