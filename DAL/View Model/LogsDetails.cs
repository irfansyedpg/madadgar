using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.ViewModel
{
    public class LogsDetails
    {
       //Response Table
        [Key]
        public string Name { get; set; }
        public string ContactNo { get; set; }
        public string Datee { get; set; }
        public string Section { get; set; }
        public string DisasterType { get; set; }
        public string District { get; set; }


        public string varname { get; set; }
        public string response { get; set; }

        //Log Table

        public string Lat { get; set; }
        public string Long { get; set; }


    }
}
