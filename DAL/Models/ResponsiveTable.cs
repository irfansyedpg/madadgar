    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace DAL.Models
    {
        [Table("MD_Tbl_ResponseTable")]
        public class ResponseTable
        {
           [Key]
           [Column("AppPK")]
            public int AppPK { get; set; }
           [Column("FK")]
             public int FK { get; set; }
            [Column("VarName")]
             public string VarName { get; set; }
            [Column("Response")]
             public string Response { get; set; }
            [Column("Section")]
             public string Section { get; set; }
        }
    }
