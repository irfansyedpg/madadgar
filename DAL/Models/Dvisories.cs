using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class Dvisories
    {
        [DisplayFormat(DataFormatString = "{0:dd'/'MM'/'yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Adv_Date { get; set; }
        public string Sub_File { get; set; }
    }
}
