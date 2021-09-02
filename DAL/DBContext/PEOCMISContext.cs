using System;
using DAL.Models;
using DAL.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace DAL.DBContext
{
    public class PEOCMISContext : DbContext
    {
        //add constructor
        public PEOCMISContext(DbContextOptions<PEOCMISContext> options) : base(options)
        {

        }
        [Obsolete]
        public DbQuery<DSR> dSRs { get; set; }
        public DbSet<ResponseTable> Responses { get; set; }
        [Obsolete]
        public DbQuery<Logs> Logs { get; set; }
        public DbSet<LogID> LastIds { get; set; }
        [Obsolete]
        public DbQuery<LogID> LogId { get; set; }
        [Obsolete]
        public DbQuery<UserView> UsersInfo { get; set; }
        [Obsolete]
        public DbQuery<VMEmergencyContact> ErCntinfo { get; set; }

        [Obsolete]
        public DbQuery<VMDistricts> Districtinfo { get; set; }

    


        [Obsolete]
        public DbQuery<VMQuickLinks> QLCntinfo { get; set; }
        [Obsolete]
        public DbQuery<VMEvacuationCenter> EVaCntinfo { get; set; }

        [Obsolete]
        public DbQuery<VMUserInfo> UserInfoinfo { get; set; }

   



        [Obsolete]
        public DbQuery<VMComplaint> Complaintinfo { get; set; }

        [Obsolete]
        public DbQuery<VMLogDetails> LogsDetailinfo { get; set; }


        [Obsolete]
        public DbQuery<VMTehsil> Teshilinfo { get; set; }

        public DbSet<Logs> LogsView { get; set; }



        [Obsolete]
        public DbSet<LogsDetails> LogsDetails { get; set; }

        public DbSet<DWRView> DWRViews { get; set; }
        [Obsolete]
        public DbQuery<Dvisories> Dvisories { get; set; }


        // risk assesment

        public DbSet<VMRiskAssesment> CntxtRiskAssesment { get; set; }


        public DbSet<VMFlyers> CntxtFlyers { get; set; }

        public DbSet<VMRDImage> CntxtRDImages { get; set; }





    }
}
