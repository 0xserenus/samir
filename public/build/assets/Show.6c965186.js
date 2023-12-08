import{_ as c}from"./AppLayout.f30b1c4a.js";import p from"./DeleteUserForm.4e07e9e5.js";import l from"./LogoutOtherBrowserSessionsForm.0d71176b.js";import{S as s}from"./SectionBorder.7ce05547.js";import f from"./TwoFactorAuthenticationForm.b87ca57c.js";import u from"./UpdatePasswordForm.ea5b1568.js";import _ from"./UpdateProfileInformationForm.9dc87fbb.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.8c0e4598.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionSection.6ff1e597.js";import"./SectionTitle.7e5ee271.js";import"./DangerButton.64dd57e6.js";import"./DialogModal.b2973e64.js";import"./TextInput.3c6b6270.js";import"./SecondaryButton.88e2a4b2.js";import"./ActionMessage.0c149ddb.js";import"./PrimaryButton.d42244ea.js";import"./InputLabel.969970c4.js";import"./FormSection.6ab54561.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};