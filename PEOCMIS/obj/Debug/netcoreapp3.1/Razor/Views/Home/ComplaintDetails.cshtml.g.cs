#pragma checksum "D:\data transfer\Mobilise one Folder\Mobilise Civil Protection APp\PEOCMIS\PEOCMIS\Views\Home\ComplaintDetails.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c693995a52d9e3866ac4fba921409a18120fd655"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_ComplaintDetails), @"mvc.1.0.view", @"/Views/Home/ComplaintDetails.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c693995a52d9e3866ac4fba921409a18120fd655", @"/Views/Home/ComplaintDetails.cshtml")]
    public class Views_Home_ComplaintDetails : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/MyScripts/ComplaintDetail.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\data transfer\Mobilise one Folder\Mobilise Civil Protection APp\PEOCMIS\PEOCMIS\Views\Home\ComplaintDetails.cshtml"
  
    Layout = "~/Views/Shared/Master_page.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"

<style type=""text/css"">

    /* Set the size of the div element that contains the map */
    #map {
        height: 400px;
        /* The height is 400 pixels */
        width: 100%;
        /* The width is the width of the web page */
    }
</style>
");
            WriteLiteral("<script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCSNUzCDjt1SEhbn6EvYtyRL4TK-0m_BN8\"></script>\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c693995a52d9e3866ac4fba921409a18120fd6553840", async() => {
                WriteLiteral(@"


    <!-- ============================================================== -->
    <div class=""page-wrapper"">
        <div class=""container-fluid"">
            <div id=""map"" style=""height: 500px; width: auto;"">
            </div>

        </div>



        <div class=""row"">
            <div class=""col-12"">
                <div class=""card"">
                    <div class=""card-body"">
                        <h4 class=""card-title"">Detail</h4>



                  

                        <div class=""form-group row"">
                            <label for=""inputPassword"" class=""col-sm-2 col-form-label"">Complaint Detail</label>
                            <div class=""col-sm-8"">
                                <label  class=""form-control"" id=""cmpdetail"" name=""cmpdetail"">
                            </div>
                        </div>


                        <div class=""table-responsive"">
                            <table id=""tbl_info"" class=""table table-striped table-bordered");
                WriteLiteral(@" display no-wrap""
                                   style=""width:100%"">
                                <thead>
                                    <tr>

                                        <th>#</th>
                                        <th>Title</th>
                                   
                                        <th>User Name</th>
                                        <th>Conatact</th>
                                        <th>District</th>
                                        <th>Tehsil</th>
                                        <th>Address</th>
                                        <th>User Type</th>
                                        <th>Registerd Since</th>


                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
      ");
                WriteLiteral(@"      </div>
        </div>





        <div class=""row"">
            <div class=""col-12"">
                <div class=""card"">
                    <div class=""card-body"">
                        <h4 class=""card-title"">Uploaded Images</h4>

                        <div class=""table-responsive"">
                            <table id=""tbl_image"" class=""table table-striped table-bordered display no-wrap""
                                   style=""width:100%"">
                                <thead>
                                    <tr>
");
                WriteLiteral(@"
                                        <th>#</th>
                                        <th>Images</th>


                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <div class=""row"">
            <div class=""col-12"">
                <div class=""card"">
                    <div class=""card-body"">
                        <h4 class=""card-title"">Action Details</h4>

                        <div class=""table-responsive"">
                            <table id=""tbl_data"" class=""table table-striped table-bordered display no-wrap""
                                   style=""width:100%"">
                                <thead>
                                    <tr>
");
                WriteLiteral(@"                                        <th>#</th>
                                        <th>Action Taken By </th>
                                        <th>Action Detail</th>
                                        <th>Dated</th>


                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class=""container-fluid"">


            <div class=""form-group row"">
                <h4>take Action</h4>
            </div>

            <form class=""mt-4"" id=""form_submit"">


                <div class=""form-group row"">
                    <label for=""inputPassword"" class=""col-sm-2 col-form-label"">Action By</label>
                    <div class=""col-sm-8"">
                        <input type=""text"" class=""form-contr");
                WriteLiteral(@"ol"" id=""actionby"" name=""actionby"" placeholder=""Action By"">
                    </div>
                </div>

                <div class=""form-group row"">
                    <label for=""inputPassword"" class=""col-sm-2 col-form-label"">Action Detail</label>
                    <div class=""col-sm-8"">
                        <input type=""text"" class=""form-control"" id=""detail"" name=""detail"" placeholder=""Detail"">
                    </div>
                </div>


                <div class=""form-group row"">

                    <label for=""inputPassword"" class=""col-sm-2 col-form-label""></label>
                    <div class=""col-md-8"">

                        <button class=""btn btn-success col align-self-end"" type=""submit"">Submite</button>

                    </div>

                </div>


            </form>

        </div>



    </div>

");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c693995a52d9e3866ac4fba921409a18120fd65510606", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
