﻿using DAL.DBContext;
using DAL.Models;
using DAL.ViewModel;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using PEOCMIS.Infrastructure;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace PEOCMIS.Repository
{
    public class PeocmisRepo : IPeocmisRepo
    {
        private readonly PEOCMISContext _context;
        //var context = new SchoolContext();
        public PeocmisRepo(PEOCMISContext context)
        {
            _context = context;
        }
        [Obsolete]
        public List<DSR> dSRShow(string CDate, string From, string To)
        {
            return _context.dSRs.FromSql($"MD_Pro_DSR_Show {CDate},{From},{To}").AsEnumerable().ToList();
        }

        public int InsertResponse(List<ResponseTable> responses)
        {
            _context.Responses.AddRange(responses);
            var result = _context.SaveChanges();
            return result;
        }

        [Obsolete]
        public string LogsInsertion(Logs logs)
        {

            try
            {

                //SqlParameter outPutVal = new SqlParameter();
                var getdetailprojectlist = _context.Database.ExecuteSqlCommand($"MD_Proc_Logs_Insert @UserID, @Datee,@Timee,@Lat,@Long,@Section,@DistrictId,@DisasterType",
                    new SqlParameter("@UserID", logs.UserID),
                    new SqlParameter("@Datee", logs.Datee),
                    new SqlParameter("@Timee", logs.Timee),
                    new SqlParameter("@Lat", logs.Lat),
                    new SqlParameter("@Long", logs.Long),
                    new SqlParameter("@Section", logs.Section),
                    new SqlParameter("@DistrictId", logs.DistrictId),
                    new SqlParameter("@DisasterType", logs.DisasterType)

                );
                //cmd.Parameters.Add(outPutVal);

                if (getdetailprojectlist > 0)
                {
                   

                    return "Success";
                }
                return "error";
            }
            catch (Exception)
            {

                throw;
            }
        }
        [Obsolete]
        public int Logs()
        {
            return _context.LastIds.FromSql($"MD_Proc_CountID_Log_ID").AsEnumerable().FirstOrDefault().LogPK;
        }
        [Obsolete]
        public int Signup()
        {
            return _context.LastIds.FromSql($"MD_Proc_CountID_Signup_ID").AsEnumerable().FirstOrDefault().LogPK;
        }
        [Obsolete]
        public VMSigin Login(Login login)
        {

            return _context.UsersSign.FromSql($"MD_Pro_User_Login @Email, @Password", new SqlParameter("@Email", login.Email), new SqlParameter("@Password", login.Password)).AsEnumerable()
                    .FirstOrDefault();

        }
        [Obsolete]
        public UserView FnLogin(UserLogin login)
        {

            try
            {

                return _context.UsersInfo.FromSql($"MD_Proc_login @Email, @Password", new SqlParameter("@Email", login.Email), new SqlParameter("@Password", login.Password)).AsEnumerable()
                                    .FirstOrDefault();
            }

            catch (Exception)
            {

                throw;
            }

        }



        // Emergency COntact
        [Obsolete]
        public List<VMEmergencyContact> FnEmrCnt(MEmergencyContact ErCnt)
        {


            try
            {


                return _context.ErCntinfo.FromSql($"MD_Pro_Insert_EmergencyContact  @Department, @Contact, @Districtid, @orderr",
                   new SqlParameter("@Department", ErCnt.Department),
                   new SqlParameter("@Contact", ErCnt.Contact),
                   new SqlParameter("@Districtid", ErCnt.Districtid) ,
                   new SqlParameter("@orderr", ErCnt.orderNumber)


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }

        }


        [Obsolete]
        public List<VMEmergencyContact> FnGetEmrCnt()
        {
            try
            {
                return _context.ErCntinfo.FromSql($"MD_Pro_Get_EmergencyContact"

                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }

        }

        [Obsolete]


        public List<VMDistricts> FnGetDistricts()
        {
            try
            {
                return _context.Districtinfo.FromSql($"MD_Pro_Get_Districts").AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }
        }

        [Obsolete]
        public string FnDeltEmrCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_EmergencyContact @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }



        //Quick LInks

        [Obsolete]
        public List<VMQuickLinks> FnQuicklinkCnt(MQuickLinks ErCnt)
        {


            try
            {


                return _context.QLCntinfo.FromSql($"MD_Pro_Insert_QuickLinks  @Department, @Link, @Ordeer",
                   new SqlParameter("@Department", ErCnt.Department),
                   new SqlParameter("@Link", ErCnt.Link),
                   new SqlParameter("@Ordeer", ErCnt.Ordeer)


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }

        }



        [Obsolete]
        public string FnDeltQuickLinkCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_QuickLink @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }


        [Obsolete]
        public List<VMQuickLinks> FnGetQuickCnt()
        {
            try
            {
                return _context.QLCntinfo.FromSql($"MD_Pro_Get_QuickLinks"

                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }

        }




        // EvacuationCenter
        [Obsolete]
        public List<VMEvacuationCenter> FnGetEvacuationCenter(string Type)
        {
            try
            {
                return _context.EVaCntinfo.FromSql($"MD_Pro_Get_EvacuationCenter @Type",
                           new SqlParameter("@Type", Type)

                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }
        }



        [Obsolete]
        public List<VMEvacuationCenter> FnEvacuationCenterCnt(MEvacuationCenter ErCnt)
        {


            try
            {


                return _context.EVaCntinfo.FromSql($"MD_Pro_Insert_EvacuationCenter  @CenterName, @Latitude,@Longitude,@Districtid",
                   new SqlParameter("@CenterName", ErCnt.CenterName),
                   new SqlParameter("@Latitude", ErCnt.Latitude),
                   new SqlParameter("@Longitude", ErCnt.Longitude),
                   new SqlParameter("@Districtid", ErCnt.Districtid)

                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }

        }

        [Obsolete]
        public string FnEvacuationCentersCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_EvacuationCenter @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }



        [Obsolete]
        public List<VMUserInfo> FnGetUserInfoCenter(string type)
        {



            try
            {


                return _context.UserInfoinfo.FromSql($"MD_Pro_Get_UserInfo  @Type",
                   new SqlParameter("@Type", type)


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }


        [Obsolete]
        public List<VMUserInfoUserEng> FnGetUserInfoUserEng(string district)
        {



            try
            {


                return _context.UserInfoUserEnginfo.FromSql($"MD_Pro_Get_UserInfo_UserEng  @District",
                   new SqlParameter("@District", district)


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }



        [Obsolete]
        public List<VMComplaint> FnGetComplaintCenter()
        {



            try
            {


                return _context.Complaintinfo.FromSql($"MD_Pro_Get_Complaints "


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }


        [Obsolete]
        public string FnDeltDistrictCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_District @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }



        [Obsolete]
        public string FnDistCnt(string district)
        {



            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Insert_District @District",
                           new SqlParameter("@District", district)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }




        // Tehsil


        [Obsolete]
        public List<VMTehsil> FnGetTeshilCnt()
        {



            try
            {


                return _context.Teshilinfo.FromSql($"MD_Pro_Get_Tehsil "


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }


        [Obsolete]
        public string FnDeltTehsilCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_Tehsil @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }



        [Obsolete]
        public string FnUpdateUserInfo(int UserId, int Status)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Update_UserInfo_Status @UserId,@Status",
                   new SqlParameter("@UserId", UserId),
                   new SqlParameter("@Status", Status)


                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }
        }



        [Obsolete]
        public string FnUpdateEvacuationCenter(int PK, int Status)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Update_EvacuationCenter_Status @PK,@Status",
                   new SqlParameter("@PK", PK),
                   new SqlParameter("@Status", Status)


                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }


        }



        [Obsolete]
        public string FnComplaintActionCnt(MComplaintAction action)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Insert_Complaints_Action @ComPK, @ActionTaken,@ActionBy",
                   new SqlParameter("@ComPK", action.ComPK),
                   new SqlParameter("@ActionTaken", action.ActionTaken),
                      new SqlParameter("@ActionBy", action.ActionBy)


                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }


        }



        [Obsolete]
        public string FnResponseActionCnt(MComplaintAction action)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Insert_Response_Action @LogPK, @ActionTaken,@ActionBy",
                   new SqlParameter("@LogPK", action.ComPK),
                   new SqlParameter("@ActionTaken", action.ActionTaken),
                      new SqlParameter("@ActionBy", action.ActionBy)


                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }


        }


        [Obsolete]
        public string FnTehsilCnt(string tehsil, int distid)
        {



            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Insert_Tehsil @Tehsil,@Districtid",
                           new SqlParameter("@Tehsil", tehsil),
                           new SqlParameter("@Districtid", distid)



                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }



        [Obsolete]
        public List<Logs> LogsView(string district, string disastertype, string section)
        {
            return _context.LogsView.FromSql($"MD_Pro_Log_View @district, @disastertype, @section",
                   new SqlParameter("@district", district),
                   new SqlParameter("@section", section),
                   new SqlParameter("@disastertype", disastertype)
                  ).AsEnumerable().ToList();
        }


        [Obsolete]
        public List<LogsDetails> LogsDetails(int LogPK)
        {
            //   return _context.LogsDetails.FromSql($"MD_Pro_Log_View_Details {LogPK}").AsEnumerable().ToList();


            var result = _context.LogsDetails.FromSql($"MD_Pro_Log_View_Details @LogPK",

                 new SqlParameter("@LogPK", LogPK)
                ).AsEnumerable().ToList();


            return result;

        }



        [Obsolete]
        public List<VMLogDetails> FnLogDetailCenter(int logid)
        {



            try
            {



                var result = _context.LogsDetailinfo.FromSql($"MD_Pro_Log_View_Details @LogPK",

                     new SqlParameter("@LogPK", logid)
                    ).AsEnumerable().ToList();


                return result;


            }
            catch (Exception)
            {

                throw;
            }



        }





        [Obsolete]
        public List<Dvisories> Dvisories()
        {
            return _context.Dvisories.FromSql($"MD_Pro_DSR_Advisories").AsEnumerable().ToList();
        }

        //Sign function
        [Obsolete]
        public string FnSignup(Signup signup)
        {

            try
            {
                var signupDetailsList = _context.Database.ExecuteSqlCommand($"MD_Proc_Sigup @Name, @ContactNo,@District,@Tehsil,@Address,@Email,@Type,@Password,@CNIC,@Latt,@Longg",
                    new SqlParameter("@Name", signup.Name),
                    new SqlParameter("@ContactNo", signup.ContactNo),
                    new SqlParameter("@District", signup.District),
                    new SqlParameter("@Tehsil", signup.Tehsil),
                    new SqlParameter("@Address", signup.Address),
                    new SqlParameter("@Email", signup.Email),
                    new SqlParameter("@Type", signup.Type),
                    new SqlParameter("@Password", signup.Password),
                    new SqlParameter("@CNIC", signup.CNIC),
                    new SqlParameter("@Latt", signup.Latt),
                    new SqlParameter("@Longg", signup.Longg)

                );
                if (signupDetailsList > 0)
                {
                    return "Success";
                }
                return "error";
            }
            catch (Exception)
            {

                throw;
            }
        }



        //end
        [Obsolete]
        public List<DWRView> DWRViews()
        {
            return _context.DWRViews.FromSql($"MD_Pro_DWR_View").AsEnumerable().ToList();
        }
        [Obsolete]
        public List<DWRView> DWRViewsBydate(string Added_Date)
        {
            return _context.DWRViews.FromSql($"MD_Pro_DWR_Date_View {Added_Date}").AsEnumerable().ToList();
        }

        public int Add(ResponseTable newEmployee)
        {
            _context.Responses.AddRange(newEmployee);
            var result = _context.SaveChanges();
            return result;
        }


        [Obsolete]
        public string FnRiskAssesmentCnt(MRiskAssesment riskassment)
        {

            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Insert_RiskAssesment @Typee,@Title,@Detail,@ImageName",
                           new SqlParameter("@Typee", riskassment.Typee),
                           new SqlParameter("@Title", riskassment.Title),
                           new SqlParameter("@Detail", riskassment.Detail),
                           new SqlParameter("@ImageName", riskassment.ImageName)




                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }
        }



        [Obsolete]
        public string FnFlyersCnt(MFlyers riskassment)
        {

            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Insert_Flyers @Title,@ImageName,@Typee",

                           new SqlParameter("@Title", riskassment.Title),

                           new SqlParameter("@ImageName", riskassment.ImageName),
                           new SqlParameter("@Typee", riskassment.Typee)




                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }
        }


        [Obsolete]
        public int FnComplaintsCnt(MComplaints riskassment)
        {

   
            try
            {
                var contt = _context.CompID.FromSql($"MD_Pro_Insert_Complaints @Title,@Detail,@UserId,@Dated",

                           new SqlParameter("@Title", riskassment.Title),
                           new SqlParameter("@Detail", riskassment.Detail),
                           new SqlParameter("@UserId", riskassment.UserId),
                           new SqlParameter("@Dated", riskassment.Dated)




                ).AsEnumerable().FirstOrDefault().PK;


                return contt;

            }
            catch (Exception)
            {

                throw;
            }
        }






        [Obsolete]
        public String FnUpdateVolntStatus(MVolntUserStatus vuser)
        {

            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_UserStatusVolntEng @UserID,@Status",
                   new SqlParameter("@UserID", vuser.UserId),
                   new SqlParameter("@Status", vuser.Status)


                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }
        }




        [Obsolete]
        public string FnRDImagesCnt(MRDImage riskassment)
        {

            try
            {
                if (riskassment.PK == 007) // insert to Complaint else to RD and DNA 
                {
                    var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Complaint_images @Path,@ComPK",
                             new SqlParameter("@Path", riskassment.Path),
                             new SqlParameter("@ComPK", riskassment.LogId));
                }
                else
                {
                    var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_RD_images @Path,@LogId",
                               new SqlParameter("@Path", riskassment.Path),
                               new SqlParameter("@LogId", riskassment.LogId));
                }




                return "Succes";

            }
            catch (Exception)
            {

                throw;
            }
        }


        [Obsolete]
        public List<VMRiskAssesment> FnGetRiskAssmentCnt()
        {



            try
            {


                return _context.CntxtRiskAssesment.FromSql($"MD_Pro_Get_RiskAssesment  "


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }




        [Obsolete]
        public List<VMFlyers> FnGetFlyersCnt()
        {



            try
            {


                return _context.CntxtFlyers.FromSql($"MD_Pro_Get_Flyers  "


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }


        [Obsolete]
        public List<VMRDImage> FnGetRDImagesCnt(int logid)
        {



            try
            {


                return _context.CntxtRDImages.FromSql($"MD_Pro_Get_RDImages @LogId",
                           new SqlParameter("@LogId", logid)


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }



        [Obsolete]
        public List<VMRDAction> FnGetRDActions(int logid)
        {



            try
            {


                return _context.CntxtRDAction.FromSql($"MD_Pro_Get_Response_Action @LogId",
                           new SqlParameter("@LogId", logid)


                ).AsEnumerable().ToList();


            }
            catch (Exception)
            {

                throw;
            }



        }




        [Obsolete]
        public string FnDeleteRiskAssmentCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_RiskAssesment @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }




        [Obsolete]
        public string FnFlyersCnt(int pk)
        {
            try
            {
                var contt = _context.Database.ExecuteSqlCommand($"MD_Pro_Delete_Flyers @pk",
                           new SqlParameter("@pk", pk)

                );

                if (contt > 0)
                {
                    return "Success";
                }
                return "error";

            }
            catch (Exception)
            {

                throw;
            }

        }


        [Obsolete]
        public List<VMComplaintsDetails> FnComplantDetailCenter(int CompPk)
        {



            try
            {



                var result = _context.CompDetailfo.FromSql($"MD_Pro_Get_Complaints_Details @ComPK",

                     new SqlParameter("@ComPK", CompPk)
                    ).AsEnumerable().ToList();


                return result;


            }
            catch (Exception)
            {

                throw;
            }



        }


    }

}
