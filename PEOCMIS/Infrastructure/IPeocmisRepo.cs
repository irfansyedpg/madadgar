﻿using System;
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
        VMSigin Login(Login login);
        List<Logs> LogsView(string district, string disastertype, string section);
 
        List<DWRView> DWRViews();
        List<DWRView> DWRViewsBydate( string date);

        List<Dvisories> Dvisories();
        string FnSignup(Signup signup);
        UserView FnLogin(UserLogin login);
        List<VMEmergencyContact> FnEmrCnt(MEmergencyContact ErCnt);
        List<VMEmergencyContact> FnGetEmrCnt();


        List<VMQuickLinks> FnQuicklinkCnt(MQuickLinks Qlinks);


        string FnComplaintActionCnt(MComplaintAction Qlinks);


        string FnResponseActionCnt(MComplaintAction Qlinks);

        List<VMQuickLinks> FnGetQuickCnt();

        List<VMEvacuationCenter> FnGetEvacuationCenter(string Type);

        List<VMEvacuationCenter> FnEvacuationCenterCnt(MEvacuationCenter Qlinks);


        List<LogsDetails> LogsDetails(int logId);
    
        List<VMUserInfo> FnGetUserInfoCenter(string type);

        List<VMUserInfoUserEng> FnGetUserInfoUserEng(string district);

        string FnUpdateUserInfo(int UserID,int Status);

        string FnUpdateEvacuationCenter(int PK, int Status);

        List<VMComplaint> FnGetComplaintCenter();

        List<VMLogDetails> FnLogDetailCenter(int logId);

        List<VMComplaintsDetails> FnComplantDetailCenter(int CompID);

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

        string FnFlyersCnt(MFlyers riskassment);


        int FnComplaintsCnt(MComplaints cmplt);

        string FnUpdateVolntStatus(MVolntUserStatus vuser);


        string FnRDImagesCnt(MRDImage riskassment);


        List<VMRiskAssesment> FnGetRiskAssmentCnt();

        List<VMFlyers> FnGetFlyersCnt();

        List<VMRDImage> FnGetRDImagesCnt(int logid);
        List<VMRDAction> FnGetRDActions(int logid);


        string FnDeleteRiskAssmentCnt(int pk);

        string FnFlyersCnt(int pk);

    }
}
