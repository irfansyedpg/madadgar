using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class Signup
    {
        [Key]
        public int UserID { get; set; }
        public string Name { get; set; }
        public string ContactNo { get; set; }
        public string District { get; set; }
        public string Tehsil { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Type { get; set; }
        public string Password { get; set; }
        public string CNIC { get; set; }
    }
}
