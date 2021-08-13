using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class DSR
    {
        public int DSRId { get; set; }
        public char Shift { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd'/'MM'/'yyyy}", ApplyFormatInEditMode = true)]
        public DateTime AddedDate { get; set; }
    }
}
