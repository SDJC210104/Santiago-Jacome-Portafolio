const vehicles = [
    {
      name: "Autos Deportivos",
      models: [
        {
          name: "Ferrari 488 Spider",
          description: "",
          image: "https://www.pngplay.com/wp-content/uploads/13/Ferrari-488-Spider-Background-PNG-Image.png",
          fichaT: {
            Año: 2023,
            Potencia: "670 HP",
            VelocidadMaxima: "330 km/h",
            Peso: "1475 kg",
            Precio: "$335.000 USD"
          }
        },
        {
          name: "Ford Shelby Cobra GT500",
          description: "",
          image: "https://cdn.shopify.com/s/files/1/1389/4383/files/2020_GT_500.png?v=1589644069",
          fichaT: {
            Año: 2023,
            Potencia: "760 HP",
            VelocidadMaxima: "320 km/h",
            Peso: "1800 kg",
            Precio: "$82.955 USD"
          }
        },
        {
            name:"Lamborghini Sesto Elemento",
            description:"",
            image:"https://www.pngmart.com/files/22/Lamborghini-Sesto-Elemento-PNG-Photo.png",
            fichaT:{
                Año: 2022,
                Potencia: "570 HP",
                VelocidadMáxima: "350 km/h",
                Peso: "999 kg",
                Precio:"$2.643.899 USD"
            }
        },
        {
          name:"Toyota Supra MK4",
          description: "",
          image: "https://cdn131.picsart.com/280174452034211.png",
          fichaT:
          {
            Año:2002,
            Potencia:"330 HP",
            VelocidadMaxima:"270 km/h",
            Peso: "1600 kg",
            Precio: "$50.000 USD"
          }
        },
        {
          name:"Nissan 370Z",
          description: "",
          image: "https://www.motortrend.com/uploads/sites/10/2015/11/2010-nissan-370-z-touring-coupe-angular-front.png?fit=around%7C875:492.1875",
          fichaT: {
            Año:2009.,
            Potencia:"350 HP",
            VelocidadMaxima: "270 km/h",
            Peso:"1.600 kg",
            Precio:"$20.000 USD"
          }
        }
        
      ]
    },
    {
      name: "Motos Deportivas",
      models: [
        {
          name: "KTM Super Duke 1290 R",
          description: "",
          image: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_PERS_LIVO_1290-sdr-evo-22-wh-livo_%23SALL_%23AEPI_%23V1.png",
          fichaT: {
            Año: 2023,
            Potencia: "180 HP",
            VelocidadMaxima: "280 km/h",
            Peso: "195 kg",
            Precio:"$23.546 USD"
          }
        },
        {
          name: "Benelli 180S",
          description: "",
          image: "https://carbikesonline.com/wp-content/uploads/2023/01/b552e0c5f8c41165c02fc93c907aa981-hd.png",
          fichaT: {
            Año: 2023,
            Potencia: "150 HP",
            VelocidadMaxima: "260 km/h",
            Peso: "180 kg",
            Precio:"$2.799 USD"
          }
        },
        {
            name:"TVS Raider 125",
            description: "",
            image: "https://www.auteco.com.co/wp-content/uploads/2022/11/01-6.png",
            fichaT:{
                Año:2023,
                Potencia:"11 HP",
                VelocidadMaxima: "100 km/h",
                Peso: "113 kg",
                Precio:"$1.876 USD"
            }
            
        },
        {
          name:"Victory Venom 14",
          description:"",
          image:"https://auteco.vteximg.com.br/arquivos/ids/222391-599-599/moto_victory_venon14_negro_gris_2022_foto01.png?v=638107818871830000",
          fichaT:{
            Año:2024 ,
            Potencia: "13 HP",
            VelocidadMaxima: "115 km/h",
            Peso: "115 kg",
            Precio: "$1981 USD"
          }

        },
        {
          name: "Suzuki Gixxer 150 FI",
          description:"",
          image:"https://premiumbikes.ph/wp-content/uploads/2023/02/Suzuki-Gixxer-FI.png",
          fichaT:{
            Año: 2024,
            Potencia: "14 HP",
            VelocidadMaxima: "120 km/h",
            Peso:"140 kg",
            Precio:"$2695 USD"
          }

        }
      ]
    },
    {
      name: "Aviones Deportivos",
      models: [
        {
          name: "Jet G700",
          description: "",
          image: "https://www.flexjet.com/wp-content/uploads/2020/12/48A3076_G450_cutout.png",
          fichaT: {
            Año: 2022,
            Potencia: "12,500 lb thrust",
            VelocidadMaxima: "Mach 0.935 (1147 km/h)",
            Peso: "30,000 kg",
            Precio:"$78.000.000 USD"
          }
        },
        {
          name: "Viper SD4 AFT",
          description: "",
          image: "https://www.tomarkaero.com/wp-content/uploads/viper-aft.png",
          fichaT: {
            Año: "",
            Potencia: "",
            VelocidadMaxima: "",
            Peso: "",
            Precio:""
          }
        },
        {
            name: "Gulfstream G280",
            description:"",
            image:"https://images.squarespace-cdn.com/content/v1/5b858d417c9327ef31ab47fe/1632339122441-FTKAYVMC0I0KV268POE8/super-midsize-jet-Gulfstream+G280.png",
            fichaT:{
                Año:"",
                Potencia:"",
                VelocidadMaxima:"",
                Peso:"",
                Precio:"$25.000.000 USD"

            }

        }
      ]
    },
    {
      name: "Botes Deportivos",
      models: [
        {
          name: "Apache Powerboat",
          description: "",
          image:"https://lodki-lodki.ru/images/product_images/popup_images/2357_0.png",
          fichaT: {
            Año: 2023,
            Potencia: "1700 HP",
            VelocidadMaxima: "180 km/h",
            Peso: "4500 kg",
            Precio:"$325.000 USD"
          }
        },
        {
          name: "Strand Craft 122",
          description: "",
          image: "https://lxry.ca/wp-content/uploads/2011/06/sc122composite1.jpg",
          fichaT: {
            Año: 2022,
            Potencia: "1200 HP",
            VelocidadMaxima: "160 km/h",
            Peso: "3500 kg",
            Precio:"$25.000.000 USD"
          }
        },
        {
            name:"Lamborghini 63",
            description:"",
            image:"https://www.infobae.com/new-resizer/kUkLU-h5Ss9TJIpsWYp1BU6JJmM=/arc-anglerfish-arc2-prod-infobae/public/R44U47HTEVEFRDVJVNSFYVYQZM.jpg",
            fichaT: {
                Año:"2022",
                Potencia:"1.972 HP",
                VelocidadMaxima:"102 km/h",
                Peso:"24000 kg",
                Precio:"$3.500.000 USD"
            }
        }
      ]
    },
  ];
  
  export default vehicles;
  