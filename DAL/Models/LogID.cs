using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class LogID
    {
        [Key]
        [Column("LogPK")]
        public int LogPK { get; set; }
    }
}
