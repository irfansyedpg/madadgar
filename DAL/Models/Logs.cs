using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Logs
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("LogPK")]
        public int LogPK { get; set; }
        [Column("UserID")]
        public int UserID { get; set; }
        [Column("Datee")]
        public string Datee { get; set; }
        [Column("Timee")]
        public string Timee { get; set; }
        [Column("Lat")]
        public string Lat { get; set; }
        [Column("Long")]
        public string Long { get; set; }
        [Column("Section")]
        public string Section { get; set; }

        // adition 


        [Column("Name")]
        public string Name { get; set; }

        [Column("ContactNO")]
        public string ContactNo { get; set; }

        [Column("DisasterType")]
        public string DisasterType { get; set; }

        [Column("District")]
        public string District { get; set; }

        [Column("DistrictId")]
        public int DistrictId { get; set; }
    }
}
