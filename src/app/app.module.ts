import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatechambresbyadminComponent } from './components/createchambresbyadmin/createchambresbyadmin.component';
import { CreatecriteresbyadminComponent } from './components/createcriteresbyadmin/createcriteresbyadmin.component';
import { CreatehotelPhotosbyadminComponent } from './components/createhotel-photosbyadmin/createhotel-photosbyadmin.component';
import { CreatehotelsbyadminComponent } from './components/createhotelsbyadmin/createhotelsbyadmin.component';
import { CreatenoteAgencebyadminComponent } from './components/createnote-agencebyadmin/createnote-agencebyadmin.component';
import { CreatenoteHotelbyadminComponent } from './components/createnote-hotelbyadmin/createnote-hotelbyadmin.component';
import { CreatereservationDetailsbyadminComponent } from './components/createreservation-detailsbyadmin/createreservation-detailsbyadmin.component';
import { CreatereservationsbyadminComponent } from './components/createreservationsbyadmin/createreservationsbyadmin.component';
import { CreateusersbyadminComponent } from './components/createusersbyadmin/createusersbyadmin.component';
import { EditchambresbyadminComponent } from './components/editchambresbyadmin/editchambresbyadmin.component';
import { EditcriteresbyadminComponent } from './components/editcriteresbyadmin/editcriteresbyadmin.component';
import { EdithotelPhotosbyadminComponent } from './components/edithotel-photosbyadmin/edithotel-photosbyadmin.component';
import { EdithotelsbyadminComponent } from './components/edithotelsbyadmin/edithotelsbyadmin.component';
import { EditnoteAgencebyadminComponent } from './components/editnote-agencebyadmin/editnote-agencebyadmin.component';
import { EditnoteHotelbyadminComponent } from './components/editnote-hotelbyadmin/editnote-hotelbyadmin.component';
import { EditreservationDetailsbyadminComponent } from './components/editreservation-detailsbyadmin/editreservation-detailsbyadmin.component';
import { EditreservationsbyadminComponent } from './components/editreservationsbyadmin/editreservationsbyadmin.component';
import { EditusersbyadminComponent } from './components/editusersbyadmin/editusersbyadmin.component';
import { ListchambresbyadminComponent } from './components/listchambresbyadmin/listchambresbyadmin.component';
import { ListcriteresbyadminComponent } from './components/listcriteresbyadmin/listcriteresbyadmin.component';
import { ListhotelPhotosbyadminComponent } from './components/listhotel-photosbyadmin/listhotel-photosbyadmin.component';
import { ListhotelsbyadminComponent } from './components/listhotelsbyadmin/listhotelsbyadmin.component';
import { ListnoteAgencebyadminComponent } from './components/listnote-agencebyadmin/listnote-agencebyadmin.component';
import { ListnoteHotelbyadminComponent } from './components/listnote-hotelbyadmin/listnote-hotelbyadmin.component';
import { ListreservationDetailsbyadminComponent } from './components/listreservation-detailsbyadmin/listreservation-detailsbyadmin.component';
import { ListreservationsbyadminComponent } from './components/listreservationsbyadmin/listreservationsbyadmin.component';
import { ListusersbyadminComponent } from './components/listusersbyadmin/listusersbyadmin.component';
import { DetailchambresbyadminComponent } from './components/detailchambresbyadmin/detailchambresbyadmin.component';
import { DetailcriteresbyadminComponent } from './components/detailcriteresbyadmin/detailcriteresbyadmin.component';
import { DetailhotelPhotosbyadminComponent } from './components/detailhotel-photosbyadmin/detailhotel-photosbyadmin.component';
import { DetailhotelsbyadminComponent } from './components/detailhotelsbyadmin/detailhotelsbyadmin.component';
import { DetailnoteAgencebyadminComponent } from './components/detailnote-agencebyadmin/detailnote-agencebyadmin.component';
import { DetailnoteHotelbyadminComponent } from './components/detailnote-hotelbyadmin/detailnote-hotelbyadmin.component';
import { DetailreservationDetailsbyadminComponent } from './components/detailreservation-detailsbyadmin/detailreservation-detailsbyadmin.component';
import { DetailreservationsbyadminComponent } from './components/detailreservationsbyadmin/detailreservationsbyadmin.component';
import { DetailusersbyadminComponent } from './components/detailusersbyadmin/detailusersbyadmin.component';
import { LoginbyadminComponent } from './components/loginbyadmin/loginbyadmin.component';
import { RegitserbyadminComponent } from './components/regitserbyadmin/regitserbyadmin.component';
import { HeaderbyadminComponent } from './components/headerbyadmin/headerbyadmin.component';
import { FooterbyadminComponent } from './components/footerbyadmin/footerbyadmin.component';
import { MenubyadminComponent } from './components/menubyadmin/menubyadmin.component';
import { CreatechambresbyagenceComponent } from './components/createchambresbyagence/createchambresbyagence.component';
import { CreatecriteresbyagenceComponent } from './components/createcriteresbyagence/createcriteresbyagence.component';
import { CreatehotelPhotosbyagenceComponent } from './components/createhotel-photosbyagence/createhotel-photosbyagence.component';
import { CreatehotelsbyagenceComponent } from './components/createhotelsbyagence/createhotelsbyagence.component';
import { CreatenoteAgencebyagenceComponent } from './components/createnote-agencebyagence/createnote-agencebyagence.component';
import { CreatenoteHotelbyagenceComponent } from './components/createnote-hotelbyagence/createnote-hotelbyagence.component';
import { CreatereservationDetailsbyagenceComponent } from './components/createreservation-detailsbyagence/createreservation-detailsbyagence.component';
import { CreatereservationsbyagenceComponent } from './components/createreservationsbyagence/createreservationsbyagence.component';
import { CreateusersbyagenceComponent } from './components/createusersbyagence/createusersbyagence.component';
import { EditchambresbyagenceComponent } from './components/editchambresbyagence/editchambresbyagence.component';
import { EditcriteresbyagenceComponent } from './components/editcriteresbyagence/editcriteresbyagence.component';
import { EdithotelPhotosbyagenceComponent } from './components/edithotel-photosbyagence/edithotel-photosbyagence.component';
import { EdithotelsbyagenceComponent } from './components/edithotelsbyagence/edithotelsbyagence.component';
import { EditnoteAgencebyagenceComponent } from './components/editnote-agencebyagence/editnote-agencebyagence.component';
import { EditnoteHotelbyagenceComponent } from './components/editnote-hotelbyagence/editnote-hotelbyagence.component';
import { EditreservationDetailsbyagenceComponent } from './components/editreservation-detailsbyagence/editreservation-detailsbyagence.component';
import { EditreservationsbyagenceComponent } from './components/editreservationsbyagence/editreservationsbyagence.component';
import { EditusersbyagenceComponent } from './components/editusersbyagence/editusersbyagence.component';
import { ListchambresbyagenceComponent } from './components/listchambresbyagence/listchambresbyagence.component';
import { ListcriteresbyagenceComponent } from './components/listcriteresbyagence/listcriteresbyagence.component';
import { ListhotelPhotosbyagenceComponent } from './components/listhotel-photosbyagence/listhotel-photosbyagence.component';
import { ListhotelsbyagenceComponent } from './components/listhotelsbyagence/listhotelsbyagence.component';
import { ListnoteAgencebyagenceComponent } from './components/listnote-agencebyagence/listnote-agencebyagence.component';
import { ListnoteHotelbyagenceComponent } from './components/listnote-hotelbyagence/listnote-hotelbyagence.component';
import { ListreservationDetailsbyagenceComponent } from './components/listreservation-detailsbyagence/listreservation-detailsbyagence.component';
import { ListreservationsbyagenceComponent } from './components/listreservationsbyagence/listreservationsbyagence.component';
import { ListusersbyagenceComponent } from './components/listusersbyagence/listusersbyagence.component';
import { DetailchambresbyagenceComponent } from './components/detailchambresbyagence/detailchambresbyagence.component';
import { DetailcriteresbyagenceComponent } from './components/detailcriteresbyagence/detailcriteresbyagence.component';
import { DetailhotelPhotosbyagenceComponent } from './components/detailhotel-photosbyagence/detailhotel-photosbyagence.component';
import { DetailhotelsbyagenceComponent } from './components/detailhotelsbyagence/detailhotelsbyagence.component';
import { DetailnoteAgencebyagenceComponent } from './components/detailnote-agencebyagence/detailnote-agencebyagence.component';
import { DetailnoteHotelbyagenceComponent } from './components/detailnote-hotelbyagence/detailnote-hotelbyagence.component';
import { DetailreservationDetailsbyagenceComponent } from './components/detailreservation-detailsbyagence/detailreservation-detailsbyagence.component';
import { DetailreservationsbyagenceComponent } from './components/detailreservationsbyagence/detailreservationsbyagence.component';
import { DetailusersbyagenceComponent } from './components/detailusersbyagence/detailusersbyagence.component';
import { LoginbyagenceComponent } from './components/loginbyagence/loginbyagence.component';
import { RegitserbyagenceComponent } from './components/regitserbyagence/regitserbyagence.component';
import { HeaderbyagenceComponent } from './components/headerbyagence/headerbyagence.component';
import { FooterbyagenceComponent } from './components/footerbyagence/footerbyagence.component';
import { MenubyagenceComponent } from './components/menubyagence/menubyagence.component';
import { CreatechambresbyclientComponent } from './components/createchambresbyclient/createchambresbyclient.component';
import { CreatecriteresbyclientComponent } from './components/createcriteresbyclient/createcriteresbyclient.component';
import { CreatehotelPhotosbyclientComponent } from './components/createhotel-photosbyclient/createhotel-photosbyclient.component';
import { CreatehotelsbyclientComponent } from './components/createhotelsbyclient/createhotelsbyclient.component';
import { CreatenoteAgencebyclientComponent } from './components/createnote-agencebyclient/createnote-agencebyclient.component';
import { CreatenoteHotelbyclientComponent } from './components/createnote-hotelbyclient/createnote-hotelbyclient.component';
import { CreatereservationDetailsbyclientComponent } from './components/createreservation-detailsbyclient/createreservation-detailsbyclient.component';
import { CreatereservationsbyclientComponent } from './components/createreservationsbyclient/createreservationsbyclient.component';
import { CreateusersbyclientComponent } from './components/createusersbyclient/createusersbyclient.component';
import { EditchambresbyclientComponent } from './components/editchambresbyclient/editchambresbyclient.component';
import { EditcriteresbyclientComponent } from './components/editcriteresbyclient/editcriteresbyclient.component';
import { EdithotelPhotosbyclientComponent } from './components/edithotel-photosbyclient/edithotel-photosbyclient.component';
import { EdithotelsbyclientComponent } from './components/edithotelsbyclient/edithotelsbyclient.component';
import { EditnoteAgencebyclientComponent } from './components/editnote-agencebyclient/editnote-agencebyclient.component';
import { EditnoteHotelbyclientComponent } from './components/editnote-hotelbyclient/editnote-hotelbyclient.component';
import { EditreservationDetailsbyclientComponent } from './components/editreservation-detailsbyclient/editreservation-detailsbyclient.component';
import { EditreservationsbyclientComponent } from './components/editreservationsbyclient/editreservationsbyclient.component';
import { EditusersbyclientComponent } from './components/editusersbyclient/editusersbyclient.component';
import { ListchambresbyclientComponent } from './components/listchambresbyclient/listchambresbyclient.component';
import { ListcriteresbyclientComponent } from './components/listcriteresbyclient/listcriteresbyclient.component';
import { ListhotelPhotosbyclientComponent } from './components/listhotel-photosbyclient/listhotel-photosbyclient.component';
import { ListhotelsbyclientComponent } from './components/listhotelsbyclient/listhotelsbyclient.component';
import { ListnoteAgencebyclientComponent } from './components/listnote-agencebyclient/listnote-agencebyclient.component';
import { ListnoteHotelbyclientComponent } from './components/listnote-hotelbyclient/listnote-hotelbyclient.component';
import { ListreservationDetailsbyclientComponent } from './components/listreservation-detailsbyclient/listreservation-detailsbyclient.component';
import { ListreservationsbyclientComponent } from './components/listreservationsbyclient/listreservationsbyclient.component';
import { ListusersbyclientComponent } from './components/listusersbyclient/listusersbyclient.component';
import { DetailchambresbyclientComponent } from './components/detailchambresbyclient/detailchambresbyclient.component';
import { DetailcriteresbyclientComponent } from './components/detailcriteresbyclient/detailcriteresbyclient.component';
import { DetailhotelPhotosbyclientComponent } from './components/detailhotel-photosbyclient/detailhotel-photosbyclient.component';
import { DetailhotelsbyclientComponent } from './components/detailhotelsbyclient/detailhotelsbyclient.component';
import { DetailnoteAgencebyclientComponent } from './components/detailnote-agencebyclient/detailnote-agencebyclient.component';
import { DetailnoteHotelbyclientComponent } from './components/detailnote-hotelbyclient/detailnote-hotelbyclient.component';
import { DetailreservationDetailsbyclientComponent } from './components/detailreservation-detailsbyclient/detailreservation-detailsbyclient.component';
import { DetailreservationsbyclientComponent } from './components/detailreservationsbyclient/detailreservationsbyclient.component';
import { DetailusersbyclientComponent } from './components/detailusersbyclient/detailusersbyclient.component';
import { LoginbyclientComponent } from './components/loginbyclient/loginbyclient.component';
import { RegitserbyclientComponent } from './components/regitserbyclient/regitserbyclient.component';
import { HeaderbyclientComponent } from './components/headerbyclient/headerbyclient.component';
import { FooterbyclientComponent } from './components/footerbyclient/footerbyclient.component';
import { MenubyclientComponent } from './components/menubyclient/menubyclient.component';


import { NgxPaginationModule } from 'ngx-pagination';
import { Chart1Component } from './components/chart1/chart1.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { Chart3Component } from './components/chart3/chart3.component';
import { Chart4Component } from './components/chart4/chart4.component';
import { AgencecreateonechambreComponent } from './components/agencecreateonechambre/agencecreateonechambre.component';
import { AgencecreatetwochambreComponent } from './components/agencecreatetwochambre/agencecreatetwochambre.component';
import { AgencecreatethreeechambreComponent } from './components/agencecreatethreeechambre/agencecreatethreeechambre.component';
import { AgencecreatefoourchambreComponent } from './components/agencecreatefoourchambre/agencecreatefoourchambre.component';
import { AgencecreatefivechambreComponent } from './components/agencecreatefivechambre/agencecreatefivechambre.component';
import { Agencecreatedetailreservation1childrenComponent } from './components/agencecreatedetailreservation1children/agencecreatedetailreservation1children.component';
import { Agencecreatedetailreservation2childrenComponent } from './components/agencecreatedetailreservation2children/agencecreatedetailreservation2children.component';
import { Agencecreatedetailreservation3childrenComponent } from './components/agencecreatedetailreservation3children/agencecreatedetailreservation3children.component';
import { Agencecreatedetailreservation4childrenComponent } from './components/agencecreatedetailreservation4children/agencecreatedetailreservation4children.component';
import { Agencecreatedetailreservation5childrenComponent } from './components/agencecreatedetailreservation5children/agencecreatedetailreservation5children.component';
import { Agencecreatedetailreservation6childrenComponent } from './components/agencecreatedetailreservation6children/agencecreatedetailreservation6children.component';
import { Agencecreatedetailreservation7childrenComponent } from './components/agencecreatedetailreservation7children/agencecreatedetailreservation7children.component';
import { Agencecreatedetailreservation8childrenComponent } from './components/agencecreatedetailreservation8children/agencecreatedetailreservation8children.component';
import { Agencecreatedetailreservation9childrenComponent } from './components/agencecreatedetailreservation9children/agencecreatedetailreservation9children.component';


import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FrontacceuilComponent } from './components/frontacceuil/frontacceuil.component';
import { FrontroomComponent } from './components/frontroom/frontroom.component';
import { Frontroom1Component } from './components/frontroom1/frontroom1.component';
import { Frontroom2Component } from './components/frontroom2/frontroom2.component';
import { Frontroom3Component } from './components/frontroom3/frontroom3.component';
import { FrontspaComponent } from './components/frontspa/frontspa.component';
import { FrontrestaurantComponent } from './components/frontrestaurant/frontrestaurant.component';
import { FrontactivitesComponent } from './components/frontactivites/frontactivites.component';
import { FrontcontactComponent } from './components/frontcontact/frontcontact.component';
import { FrontaboutComponent } from './components/frontabout/frontabout.component';
import { FronttestimonialComponent } from './components/fronttestimonial/fronttestimonial.component';
import { FrontblogComponent } from './components/frontblog/frontblog.component';
import { FrontgalerieComponent } from './components/frontgalerie/frontgalerie.component';
import { FrontheaderComponent } from './components/frontheader/frontheader.component';
import { FrontfooterComponent } from './components/frontfooter/frontfooter.component';
import { FrontmenuComponent } from './components/frontmenu/frontmenu.component';
import { FrontcontenuComponent } from './components/frontcontenu/frontcontenu.component';


import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';
import { FronthotelsComponentComponent } from './components/fronthotels-component/fronthotels-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropFileUploadDirective,
    CreatechambresbyadminComponent,
    CreatecriteresbyadminComponent,
    CreatehotelPhotosbyadminComponent,
    CreatehotelsbyadminComponent,
    CreatenoteAgencebyadminComponent,
    CreatenoteHotelbyadminComponent,
    CreatereservationDetailsbyadminComponent,
    CreatereservationsbyadminComponent,
    CreateusersbyadminComponent,
    EditchambresbyadminComponent,
    EditcriteresbyadminComponent,
    EdithotelPhotosbyadminComponent,
    EdithotelsbyadminComponent,
    EditnoteAgencebyadminComponent,
    EditnoteHotelbyadminComponent,
    EditreservationDetailsbyadminComponent,
    EditreservationsbyadminComponent,
    EditusersbyadminComponent,
    ListchambresbyadminComponent,
    ListcriteresbyadminComponent,
    ListhotelPhotosbyadminComponent,
    ListhotelsbyadminComponent,
    ListnoteAgencebyadminComponent,
    ListnoteHotelbyadminComponent,
    ListreservationDetailsbyadminComponent,
    ListreservationsbyadminComponent,
    ListusersbyadminComponent,
    DetailchambresbyadminComponent,
    DetailcriteresbyadminComponent,
    DetailhotelPhotosbyadminComponent,
    DetailhotelsbyadminComponent,
    DetailnoteAgencebyadminComponent,
    DetailnoteHotelbyadminComponent,
    DetailreservationDetailsbyadminComponent,
    DetailreservationsbyadminComponent,
    DetailusersbyadminComponent,
    LoginbyadminComponent,
    RegitserbyadminComponent,
    HeaderbyadminComponent,
    FooterbyadminComponent,
    MenubyadminComponent,
    CreatechambresbyagenceComponent,
    CreatecriteresbyagenceComponent,
    CreatehotelPhotosbyagenceComponent,
    CreatehotelsbyagenceComponent,
    CreatenoteAgencebyagenceComponent,
    CreatenoteHotelbyagenceComponent,
    CreatereservationDetailsbyagenceComponent,
    CreatereservationsbyagenceComponent,
    CreateusersbyagenceComponent,
    EditchambresbyagenceComponent,
    EditcriteresbyagenceComponent,
    EdithotelPhotosbyagenceComponent,
    EdithotelsbyagenceComponent,
    EditnoteAgencebyagenceComponent,
    EditnoteHotelbyagenceComponent,
    EditreservationDetailsbyagenceComponent,
    EditreservationsbyagenceComponent,
    EditusersbyagenceComponent,
    ListchambresbyagenceComponent,
    ListcriteresbyagenceComponent,
    ListhotelPhotosbyagenceComponent,
    ListhotelsbyagenceComponent,
    ListnoteAgencebyagenceComponent,
    ListnoteHotelbyagenceComponent,
    ListreservationDetailsbyagenceComponent,
    ListreservationsbyagenceComponent,
    ListusersbyagenceComponent,
    DetailchambresbyagenceComponent,
    DetailcriteresbyagenceComponent,
    DetailhotelPhotosbyagenceComponent,
    DetailhotelsbyagenceComponent,
    DetailnoteAgencebyagenceComponent,
    DetailnoteHotelbyagenceComponent,
    DetailreservationDetailsbyagenceComponent,
    DetailreservationsbyagenceComponent,
    DetailusersbyagenceComponent,
    LoginbyagenceComponent,
    RegitserbyagenceComponent,
    HeaderbyagenceComponent,
    FooterbyagenceComponent,
    MenubyagenceComponent,
    CreatechambresbyclientComponent,
    CreatecriteresbyclientComponent,
    CreatehotelPhotosbyclientComponent,
    CreatehotelsbyclientComponent,
    CreatenoteAgencebyclientComponent,
    CreatenoteHotelbyclientComponent,
    CreatereservationDetailsbyclientComponent,
    CreatereservationsbyclientComponent,
    CreateusersbyclientComponent,
    EditchambresbyclientComponent,
    EditcriteresbyclientComponent,
    EdithotelPhotosbyclientComponent,
    EdithotelsbyclientComponent,
    EditnoteAgencebyclientComponent,
    EditnoteHotelbyclientComponent,
    EditreservationDetailsbyclientComponent,
    EditreservationsbyclientComponent,
    EditusersbyclientComponent,
    ListchambresbyclientComponent,
    ListcriteresbyclientComponent,
    ListhotelPhotosbyclientComponent,
    ListhotelsbyclientComponent,
    ListnoteAgencebyclientComponent,
    ListnoteHotelbyclientComponent,
    ListreservationDetailsbyclientComponent,
    ListreservationsbyclientComponent,
    ListusersbyclientComponent,
    DetailchambresbyclientComponent,
    DetailcriteresbyclientComponent,
    DetailhotelPhotosbyclientComponent,
    DetailhotelsbyclientComponent,
    DetailnoteAgencebyclientComponent,
    DetailnoteHotelbyclientComponent,
    DetailreservationDetailsbyclientComponent,
    DetailreservationsbyclientComponent,
    DetailusersbyclientComponent,
    LoginbyclientComponent,
    RegitserbyclientComponent,
    HeaderbyclientComponent,
    FooterbyclientComponent,
    MenubyclientComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
    AgencecreateonechambreComponent,
    AgencecreatetwochambreComponent,
    AgencecreatethreeechambreComponent,
    AgencecreatefoourchambreComponent,
    AgencecreatefivechambreComponent,



    Agencecreatedetailreservation1childrenComponent,
    Agencecreatedetailreservation2childrenComponent,
    Agencecreatedetailreservation3childrenComponent,
    Agencecreatedetailreservation4childrenComponent,
    Agencecreatedetailreservation5childrenComponent,
    Agencecreatedetailreservation6childrenComponent,
    Agencecreatedetailreservation7childrenComponent,
    Agencecreatedetailreservation8childrenComponent,
    Agencecreatedetailreservation9childrenComponent,
    FrontacceuilComponent,
    FrontroomComponent,
    Frontroom1Component,
    Frontroom2Component,
    Frontroom3Component,
    FrontspaComponent,
    FrontrestaurantComponent,
    FrontactivitesComponent,
    FrontcontactComponent,
    FrontaboutComponent,
    FronttestimonialComponent,
    FrontblogComponent,
    FrontgalerieComponent,
    FrontheaderComponent,
    FrontfooterComponent,
    FrontmenuComponent,
    FrontcontenuComponent,
    FronthotelsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],

  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
