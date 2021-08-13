using System;
namespace DAL.Models
{
    public class MEvacuationCenter
    {
        public string CenterName { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    
        public int Districtid { get; set; }
        public int PK { get; set; }
    }
}
