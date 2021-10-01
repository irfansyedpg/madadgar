using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class CompID
    {
        [Key]
        [Column("PK")]
        public int PK { get; set; }
    }
}
