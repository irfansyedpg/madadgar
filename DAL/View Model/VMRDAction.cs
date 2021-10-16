using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.ViewModel
{
    public class VMRDAction
    {

        [Key]
        public int PK { get; set; }
        public string ActionTaken { get; set; }
        public string ActionBy { get; set; }
        public string Dated { get; set; }
 



    }
}
