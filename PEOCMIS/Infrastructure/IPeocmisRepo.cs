using System;
using System.Collections.Generic;
using DAL.Models;
using DAL.ViewModel;

namespace PEOCMIS.Infrastructure
{
    public interface IPeocmisRepo
    {
        List<DSR> dSRShow(string CDate, string From, string To);
        int InsertResponse(List<ResponseTable> responses);
        string LogsInsertion(Logs logs);
        int Logs();
        int Signup();
        UserView Login(Login login);
        List<Logs> LogsView(string district, string disastertype, string section);
 
        List<DWRView> DWRViews();
        List<DWRView> DWRViewsBydate( string date);

        List<Dvisories> Dvisories();
        string FnSignup(Signup signup);
        UserView FnLogin(UserLogin login);
        List<VMEmergencyContact> FnEmrCnt(MEmergencyContact ErCnt);
        List<VMEmergencyContact> FnGetEmrCnt();


        List<VMQuickLinks> FnQuicklinkCnt(MQuickLinks Qlinks);
        List<VMQuickLinks> FnGetQuickCnt();

        List<VMEvacuationCenter> FnGetEvacuationCenter();
        List<VMEvacuationCenter> FnEvacuationCenterCnt(MEvacuationCenter Qlinks);


        List<LogsDetails> LogsDetails(int logId);
    
        List<VMUserInfo> FnGetUserInfoCenter(string type);

        List<VMLogDetails> FnLogDetailCenter(int logId);

        List<VMDistricts> FnGetDistricts();

        string FnDistCnt(string distt);

        string FnDeltDistrictCnt(int pk);


        List<VMTehsil> FnGetTeshilCnt();

        string FnTehsilCnt(string tehsil, int distid);
        string FnDeltTehsilCnt(int pk);




        string FnDeltEmrCnt(int pk );
        string FnDeltQuickLinkCnt(int pk );
        string FnEvacuationCentersCnt(int pk );

        int Add(ResponseTable newEmployee);

        // insert into Riskassement

        string FnRiskAssesmentCnt(MRiskAssesment riskassment);


        List<VMRiskAssesment> FnGetRiskAssmentCnt();

        string FnDeleteRiskAssmentCnt(int pk);

    }
}
