import { createContext,useState } from "react";
export const ServiceContext = createContext();

const ServiceContextState_ = (props) => {
   const [cinema_, setCinema] = useState(null);
   const [loading, setLoading] = useState(false);
   const [ alert , setAlert] = useState(null);
   // import Cache from 'react-api-cache'
   // import Cache from 'node-cache'
   // const NodeCache = require("node-cache");
   // const myCache = new NodeCache();
   // console.log(NodeCache,global);
   

   
   const CinemaApiRecord = async () =>{
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      // var proxyUrl='',
      targetUrl = 'the api url';
      
   
      await fetch(proxyUrl + targetUrl).then(response => response.text()).then(data => {
         const parser = new DOMParser();
         const xml = parser.parseFromString(data, "application/xml");
         const rawFilms_ = xml.getElementsByTagName("Film");
         const rawPerformance_ = xml.getElementsByTagName("Performance");
         var films = {};
         var performances = [];
         for (let i = 0; i < rawPerformance_.length; i++) {
            var performancecode_ = rawPerformance_[i].getElementsByTagName("FilmCode")[0].textContent;
            var performance_ = {
               PerformDate: rawPerformance_[i].getElementsByTagName("PerformDate")[0].textContent,
               Passes: rawPerformance_[i].getElementsByTagName("Passes")[0].textContent,
               PerfFlags: rawPerformance_[i].getElementsByTagName("PerfFlags")[0].textContent,
               SoldOutLevel: rawPerformance_[i].getElementsByTagName("SoldOutLevel")[0].textContent,
               LastModified: rawPerformance_[i].getElementsByTagName("LastModified")[0].textContent,
               Virtual: rawPerformance_[i].getElementsByTagName("Virtual")[0].textContent,
               PerfCat: rawPerformance_[i].getElementsByTagName("PerfCat")[0].textContent,

               BookingURL: rawPerformance_[i].getElementsByTagName("BookingURL")[0].textContent,
               AD: rawPerformance_[i].getElementsByTagName("AD")[0].textContent,
               Screen: rawPerformance_[i].getElementsByTagName("Screen")[0].textContent,
               DoorsOpen: rawPerformance_[i].getElementsByTagName("DoorsOpen")[0].textContent,
               PurchasedPrivateWatchParty: rawPerformance_[i].getElementsByTagName("PurchasedPrivateWatchParty")[0].textContent,
               FilmCode: rawPerformance_[i].getElementsByTagName("FilmCode")[0].textContent,
               SellonInternet: rawPerformance_[i].getElementsByTagName("SellonInternet")[0].textContent,

               TrailerTime: rawPerformance_[i].getElementsByTagName("TrailerTime")[0].textContent,
               WheelchairAccessible: rawPerformance_[i].getElementsByTagName("WheelchairAccessible")[0].textContent,
               ReservedSeating: rawPerformance_[i].getElementsByTagName("ReservedSeating")[0].textContent,
               SalesStopped: rawPerformance_[i].getElementsByTagName("SalesStopped")[0].textContent,
               img_bd_filename_blob: rawPerformance_[i].getElementsByTagName("img_bd_filename_blob")[0].textContent,
               PerformanceNumberSlot: rawPerformance_[i].getElementsByTagName("PerformanceNumberSlot")[0].textContent,
               InternalBookingURLDesktop: rawPerformance_[i].getElementsByTagName("InternalBookingURLDesktop")[0].textContent,

               Code: rawPerformance_[i].getElementsByTagName("Code")[0].textContent,
               Subs: rawPerformance_[i].getElementsByTagName("Subs")[0].textContent,
               PressReport: rawPerformance_[i].getElementsByTagName("PressReport")[0].textContent,
               InternalBookingURLMobile: rawPerformance_[i].getElementsByTagName("InternalBookingURLMobile")[0].textContent,
               PerfFlagsDescription: rawPerformance_[i].getElementsByTagName("PerfFlagsDescription")[0].textContent,
               ScreenCode: rawPerformance_[i].getElementsByTagName("ScreenCode")[0].textContent,
               StartTime: rawPerformance_[i].getElementsByTagName("StartTime")[0].textContent,
               ManagerWarningLevel: rawPerformance_[i].getElementsByTagName("ManagerWarningLevel")[0].textContent
            };

            if(!performances[performancecode_])  performances[performancecode_] = [performance_];
            else performances[performancecode_].push(performance_);

            
            if(rawFilms_[i]){
               films[rawFilms_[i].getElementsByTagName("Code")[0].textContent] = {
                  ShortFilmTitle: rawFilms_[i].getElementsByTagName("ShortFilmTitle")[0].textContent,
                  FilmTitle: rawFilms_[i].getElementsByTagName("FilmTitle")[0].textContent,
                  PrivateWatchParty: rawFilms_[i].getElementsByTagName("PrivateWatchParty")[0].textContent,
                  Certificate: rawFilms_[i].getElementsByTagName("Certificate")[0].textContent,
   
                  Is3d: rawFilms_[i].getElementsByTagName("Is3d")[0].textContent,
                  LastModified: rawFilms_[i].getElementsByTagName("LastModified")[0].textContent,
                  Digital: rawFilms_[i].getElementsByTagName("Digital")[0].textContent,
                  Img_title: rawFilms_[i].getElementsByTagName("Img_title")[0].textContent,
                  StartDate: rawFilms_[i].getElementsByTagName("StartDate")[0].textContent,
                  EndDate: rawFilms_[i].getElementsByTagName("EndDate")[0].textContent,
                  CinecheckFlagsDescription: rawFilms_[i].getElementsByTagName("CinecheckFlagsDescription")[0].textContent,
                  CinecheckFlags: rawFilms_[i].getElementsByTagName("CinecheckFlags")[0].textContent,
   
                  ReleaseDate: rawFilms_[i].getElementsByTagName("ReleaseDate")[0].textContent,
                  Img_1s: rawFilms_[i].getElementsByTagName("Img_1s")[0].textContent,
                  Genre: rawFilms_[i].getElementsByTagName("Genre")[0].textContent,
                  FilmFlagsDescription: rawFilms_[i].getElementsByTagName("FilmFlagsDescription")[0].textContent,
                  ComingSoon: rawFilms_[i].getElementsByTagName("ComingSoon")[0].textContent,
                  Youtube: rawFilms_[i].getElementsByTagName("Youtube")[0].textContent,
                  Synopsis: rawFilms_[i].getElementsByTagName("Synopsis")[0].textContent,
                  Certificate_desc: rawFilms_[i].getElementsByTagName("Certificate_desc")[0].textContent,
                  GenreCode: rawFilms_[i].getElementsByTagName("GenreCode")[0].textContent,
                  Code: rawFilms_[i].getElementsByTagName("Code")[0].textContent,
                  Rentrak: rawFilms_[i].getElementsByTagName("Rentrak")[0].textContent,
                  RunningTime: rawFilms_[i].getElementsByTagName("RunningTime")[0].textContent,
                  img_bd: rawFilms_[i].getElementsByTagName("img_bd")[0].textContent,
                  LocalFilmCode: rawFilms_[i].getElementsByTagName("LocalFilmCode")[0].textContent,
                  CertImageUrl: rawFilms_[i].getElementsByTagName("CertImageUrl")[0].textContent,
                  FilmFlags: rawFilms_[i].getElementsByTagName("FilmFlags")[0].textContent,
                  IMDBCode: rawFilms_[i].getElementsByTagName("IMDBCode")[0].textContent,
                  Performance: []
               }
            }

            films[performancecode_].Performance = performances[performancecode_];
         }

         setCinema(films);


         // document.getElementById("demo").innerHTML =
         // xmlDoc.[0].childNodes[0].nodeValue;
         //          getElementsByTagName("title")
         //          const rawFilms_ = rawFile[0].children;
         
         // for (var i = 0; i < rawFilms_.length; i++) {
         //    var detail = rawFilms_[i].children;

         //    films[detail[21].textContent] = { 
         //       ShortFilmTitle : detail[21].textContent,
         //       FilmTitle
         //       PrivateWatchParty
         //       Certificate

         //       code_ : detail[21].textContent 
         //    };
            
         //    // {
         //    //    `${detail[21].textContent}:  ${rawFilms_[i].children[21].textContent}`
         //    // };

         //    // films[rawFilms_[i].children] = {
               
              
         //    // }
         //    console.log(rawFilms_[i].children);
         //    // [0].localName
         // }
         // rawFilms_.map(rawFilms_ => (

         // global.cache = new NodeCache();
         // myCache = global.cache;

         
         // myCache.set('cinemaData',xml.activeElement);


        
      }).catch(console.error);
   }

   const getAllMovies =  async () => {
      setLoading(true);
      // if(!global.cache) 
      await CinemaApiRecord();
      // else  myCache = global.cache;
      // setCinema(myCache.get('cinemaData'));

      setLoading(false);
   }



   const showAlert = (msg, type) => { 
      setAlert({msg,type});
      setTimeout(() => setAlert(null), 5000);
   }
   return (<ServiceContext.Provider value={{ cinema_, getAllMovies, loading, 
      setLoading, alert, showAlert }}> {props.children}</ServiceContext.Provider>);

   // return (<ServiceContext.Provider value={{ cinema:state.cinema, AllMovies, loading:state.loading, 
   //    setLoading, alert:state.alert, showAlert }}> {props.children}</ServiceContext.Provider>);
}

export default ServiceContextState_;






