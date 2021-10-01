using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.ViewModel
{
    public class VMFlyers
    {
   
        [Key]
        public int PK { get; set; }

        public string Title { get; set; }

        public string ImageName { get; set; }

        public string Typee { get; set; }

        public string Datee { get; set; }

    }
}
