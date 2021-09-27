#pragma checksum "D:\data transfer\Mobilise one Folder\Mobilise Civil Protection APp\PEOCMIS\PEOCMIS\Views\Home\EmergencyContct.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "726477b95da46d994bd32853fd2f459d1f56379d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_EmergencyContct), @"mvc.1.0.view", @"/Views/Home/EmergencyContct.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"726477b95da46d994bd32853fd2f459d1f56379d", @"/Views/Home/EmergencyContct.cshtml")]
    public class Views_Home_EmergencyContct : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/MyScripts/EmergencyContact.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\data transfer\Mobilise one Folder\Mobilise Civil Protection APp\PEOCMIS\PEOCMIS\Views\Home\EmergencyContct.cshtml"
  
    Layout = "~/Views/Shared/Master_page.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "726477b95da46d994bd32853fd2f459d1f56379d3398", async() => {
                WriteLiteral(@"


    <!-- ============================================================== -->
    <div class=""page-wrapper"">
        <div class=""container-fluid"">




            <div class=""form-group row"">
                <h4>Add Emergency Contacts</h4>
            </div>

            <form class=""mt-4"" id=""form_submit"">

                <div class=""form-group row"">
                    <label for=""inputPassword"" class=""col-sm-2 col-form-label"">Department Name</label>
                    <div class=""col-sm-8"">
                        <input type=""text"" class=""form-control"" name=""deptName"" id=""deptName"" placeholder=""Department Name"">
                    </div>
                </div>


                <div class=""form-group row"">
                    <label for=""inputPassword"" class=""col-sm-2 col-form-label"">Contact Number</label>
                    <div class=""col-sm-8"">
                        <input type=""number"" class=""form-control"" name=""cntNumber"" id=""cntNumber"" placeholder=""Contact Number"">");
                WriteLiteral(@"
                    </div>
                </div>

                <div class=""form-group row"">
                    <label for=""inputPassword"" class=""col-sm-2 col-form-label"">District</label>
                    <div class=""col-sm-8"">
                        <div class=""dropdown dept"">


                            <select class=""form-control dropdown-toggle animated fadeIn drop_but"" data-toggle=""dropdown"" style=""transition:0.5s;width: 100%;"" id=""Districts"" onchange=""searchFilter()"">
                            </select>
                        </div>
                    </div>
                </div>




                <div class=""form-group row"">

                    <label for=""inputPassword"" class=""col-sm-2 col-form-label""></label>
                    <div class=""col-md-8"">

                        <button class=""btn btn-success col align-self-end"" id=""btnadd"" type=""submit"">Add</button>

                    </div>

                </div>
            </form>
        </div>
  ");
                WriteLiteral(@"      <div class=""row"">
            <div class=""col-12"">
                <div class=""card"">
                    <div class=""card-body"">
                        <h4 class=""card-title"">Emergency Contacts</h4>

                        <div class=""table-responsive"">
                            <table id=""tbl_data"" class=""table table-striped table-bordered display no-wrap""
                                   style=""width:100%"">
                                <thead>
                                    <tr>
");
                WriteLiteral(@"                                        <th>#</th>
                                        <th>Department Name</th>

                                        <th>Contact Number</th>
                                        <th>Region</th>
                                        <th>PK</th>
                                        <th>Action</th>

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
            WriteLiteral("\r\n\r\n\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "726477b95da46d994bd32853fd2f459d1f56379d7839", async() => {
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
            WriteLiteral(">\r\n\r\n\r\n\r\n\r\n\r\n");
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
