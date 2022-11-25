const express = require('express');
const cors = require('cors');
const myRouter = require('./routes/data');
const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors());

app.use('/api',myRouter);

app.use('/check',(req,res) => {
    res.send([
      {
        id: "1",
        category: "Latest",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mrunal_Thakur_during_promotion_of_Super_30.jpg/640px-Mrunal_Thakur_during_promotion_of_Super_30.jpg",
        title: "Mrunal-Thakur",
        description:"Mrunal Thakur, is an Indian actress who predominantly works in Hindi, Marathi, and Telugu cinema. She began her acting career with the television soaps Mujhse Kuchh Kehti...Yeh Khamoshiyaan"
      },
      {
        id: "2",
        category: "Bollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BNTY5YzQyMmItODQ4MC00Yjg4LWIzNGEtODExMDAzMzhhYWViL2ltYWdlXkEyXkFqcGdeQXVyNzAwNjgyMDU@._V1_.jpg",
        title: "Bangalore Days",
        description:"Cousins, Divya, Kuttan and Arjun, fulfil their childhood dream of relocating to Bangalore. As they embrace the warmth of the city, they also face challenges that transform their lives."
      },
      {
        id: "3",
        category: "Bollywood",
        imgUrl:
          "https://www.filmibeat.com/fanimg/charlie-photos-images-36854.jpg",
        title:
          "Charlie",
        description:
                 "Tessa runs away from home to avoid getting married and rents a room. She finds a sketchbook of the previous occupant, which reveals an incomplete story, and decides to find the artist"
      },
      {
        id: "4",
        category: "Bollywood",
        imgUrl:
        "https://c.ndtvimg.com/2021-12/nd750guo_deepika-padukone-_625x300_25_December_21.jpg?im=Resize=(1230,900)",
        title:
        "Deepika Padukone",
        description:
        "Deepika Padukone is an Indian actress who works in Hindi films. She is one of the highest-paid actresses in India, and her accolades include three Filmfare Awards."
      },
      {
        id: "5",
        category: "Bollywood",
        imgUrl:
        "https://styles.redditmedia.com/t5_33hmh/styles/communityIcon_63s597frntr71.png",
        title: "Kriti Sanon",
        description:
        "Kriti Sanon is an Indian actress who appears predominantly in Hindi films. She made her acting debut with the Telugu psychological thriller 1: Nenokkadine in 2014. Sanon won the Filmfare Award for Best Female Debut for her performance in the action film Heropanti, which marked her first project in Hindi cinema."
      },
      {
        id: "6",
        category: "Bollywood",
        imgUrl:
        "https://c.ndtvimg.com/2022-11/l5jf624_-varun-dhawan-_625x300_08_November_22.jpg",
        title: "Varun Dhawan",
        description:
        "Varun Dhawan is an Indian actor who works in Hindi films. One of India's highest-paid actors, he has been featured in Forbes India's Celebrity 100 list since 2014. He has starred in 11 consecutive box-office successes between 2012 and 2018."
      },
      {
        id: "7",
        category: "Bollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        title: "M.S. Dhoni: The Untold Story",
        description:
        "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for ian Railways, he ultimately decides to chase his dreams."
      },
      {
        id: "8",
        category: "Bollywood",
        imgUrl:
        "https://img.etimg.com/thumb/msid-76368882,width-650,imgsize-175512,,resizemode-4,quality-100/.jpg",
        title: "Sushant Singh Rajput",
        description:
        "Sushant Singh Rajput was an Indian actor known for his work in Hindi cinema. He starred in a number of commercially successful Hindi films such as M.S. Dhoni: The Untold Story, Kedarnath and Chhichhore."
      },
      {
        id: "9",
        category: "Bollywood",
        imgUrl:
        "https://www.filmibeat.com/img/popcorn/profile_photos/bhumika-chawla-20190520103748-1730.jpg",
        title: "Bhumika Chawla",
        description:
        "Bhumika Chawla is an Indian actress and a former model known for her work predominantly in Indian films. She made her film debut in the Telugu film Yuvakudu.She has won one South filmfare Award, and one SIIMA award"
      },
      {
        id: "10",
        category: "Bollywood",
        imgUrl:
          "https://img.indiaforums.com/person/480x360/1/1581-kiara-advani.jpg?c=8xOB8D",
        title: "Kiara Advani",
        description:
        "Alia Advani, known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu language films. After making her acting debut in the comedy film Fugly, she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story."
      },
      {
        id: "11",
        category: "Technology",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_bUVbPWrV5cFVYOdcJzSOBdCOeJyBvbfpw&usqp=CAU",
        title: "Robotics",
        description:
        "Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans"
      },
      {
        id: "12",
        category: "Technology",
        imgUrl:
          "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
        title: "MacBook Pro",
        description:
        "The Mac is a family of personal computers designed and marketed by Apple Inc.. Macs are known for their general ease of use and distinctive aluminium, minimalist designs. Macs are notable for their popularity among students, creative professionals, and software engineers"
      },
      {
        id: "13",
        category: "Technology",
        imgUrl:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
        title: "MacBook Pro",
        description:
        "The Mac is a family of personal computers designed and marketed by Apple Inc.. Macs are known for their general ease of use and distinctive aluminium, minimalist designs. Macs are notable for their popularity among students, creative professionals, and software engineers"
      },
      {
        id: "14",
        category: "Technology",
        imgUrl:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
        title: "MacBook Pro",
        description:
        "The Mac is a family of personal computers designed and marketed by Apple Inc.. Macs are known for their general ease of use and distinctive aluminium, minimalist designs. Macs are notable for their popularity among students, creative professionals, and software engineers"
      },
      {
        id: "15",
        category: "Latest",
        imgUrl:
        "https://images.anandtech.com/doci/17563/Apple_iPhone_2022_Far_Out_678x291.jpg",
        title: "Apple 2022 fall iPhone event",
        description:
        "It's that time of the year again - Apple's fall iPhone event, where we expect the Cupertino company to unveil its newest generation family of iPhones - what should be the iPhone 14 series. With Apple seemingly satisfied with its current industrial design as embodied by the iPhone 13 lineup, it will be interesting to see what the company does to iterate on its flagship phones this year – especially the high-end Pro designs. In which case, this year may be all about the guts, and what Apple does to update things like the cameras and displays. Meanwhile, it's all but assured that Apple will introduce a new generation processor in the form of the A16. Apple's latest iterations of SoC silicon have been ground-breaking and."
      },
      {
        id: "16",
        category: "Technology",
        imgUrl:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
          title: "MacBook Pro",
          description:
          "The Mac is a family of personal computers designed and marketed by Apple Inc.. Macs are known for their general ease of use and distinctive aluminium, minimalist designs. Macs are notable for their popularity among students, creative professionals, and software engineers"
        },
      {
        id: "17",
        category: "Technology",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_bUVbPWrV5cFVYOdcJzSOBdCOeJyBvbfpw&usqp=CAU",
        title: "Robotics",
        description:
        "Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans"
      },
      {
        id: "18",
        category: "Technology",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_bUVbPWrV5cFVYOdcJzSOBdCOeJyBvbfpw&usqp=CAU",
        title: "Robotics",
        description:
        "Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans"
      },
      {
        id: "19",
        category: "Technology",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_bUVbPWrV5cFVYOdcJzSOBdCOeJyBvbfpw&usqp=CAU",
        title: "Robotics",
        description:
        "Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans"
      },
      {
        id: "20",
        category: "Technology",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_bUVbPWrV5cFVYOdcJzSOBdCOeJyBvbfpw&usqp=CAU",
        title: "Robotics",
        description:
        "Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans"
      },
      {
        id: "21",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "22",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "23",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "24",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "25",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "26",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "27",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "28",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "29",
        category: "Hollywood",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        title:
          "THE GRAY MAN",
        description:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."
      },
      {
        id: "30",
        category: "LatestArticle",
        imgUrl:
        "https://images.firstpost.com/wp-content/uploads/2019/01/Twitter-logo-people-1280.jpg?impolicy=website&width=320&height=180",
        title: "Twitter Article",
        description:
        "Hundreds of Twitter Inc employees are estimated to have decided to quit the beleaguered social media company following a Thursday deadline from new owner Elon Musk that staffers sign up for long hours at high intensity, or leave."
      },
      {
        id: "31",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "32",
        category: "LatestArticle",
        imgUrl:
        "https://images.firstpost.com/wp-content/uploads/2019/01/Twitter-logo-people-1280.jpg?impolicy=website&width=320&height=180",
        title: "Twitter Article",
        description:
        "Hundreds of Twitter Inc employees are estimated to have decided to quit the beleaguered social media company following a Thursday deadline from new owner Elon Musk that staffers sign up for long hours at high intensity, or leave."
      },
      {
        id: "33",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "34",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "35",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "36",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "37",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "38",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "39",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "40",
        category: "Fitness",
        imgUrl:
        "https://m.economictimes.com/thumb/msid-89199209,width-1200,height-900,resizemode-4,imgsize-51168/working-out-in-the-gym.jpg",
        title: "Stay fit",
        description:
        "A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
      },
      {
        id: "41",
        category: "LatestArticle",
        imgUrl:
        "https://images.firstpost.com/wp-content/uploads/2019/01/Twitter-logo-people-1280.jpg?impolicy=website&width=320&height=180",
        title: "Twitter Article",
        description:
        "Hundreds of Twitter Inc employees are estimated to have decided to quit the beleaguered social media company following a Thursday deadline from new owner Elon Musk that staffers sign up for long hours at high intensity, or leave."
      },
      {
        id: "42",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "43",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "44",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "45",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "46",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "47",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "48",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "49",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "50",
        category: "Food",
        imgUrl:
        "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
        title: "Eat healthy - Stay healthy",
        description:
          "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, ..." 
     },
      {
        id: "51",
        category: "LatestArticle",
        imgUrl:
        "https://images.firstpost.com/wp-content/uploads/2019/01/Twitter-logo-people-1280.jpg?impolicy=website&width=320&height=180",
        title: "Twitter Article",
        description:
        "Hundreds of Twitter Inc employees are estimated to have decided to quit the beleaguered social media company following a Thursday deadline from new owner Elon Musk that staffers sign up for long hours at high intensity, or leave."
      },
      {
        id: "52",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "53",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "54",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "55",
        category: "Latest",
        imgUrl:
        "https://static.sanatan.org/wp-content/uploads/sites/6/2022/11/07175146/lunar_eclipse_320.jpg",
        title: "Sanatan Sanstha",
        description:
        "the eclipse will be visible in Asia, Australia, eastern region of America and whole of South America. This lunar eclipse will be visible everywhere in India. During moonrise the moon will be visible partially. Some parts of eastern India might see total lunar eclipse; some will see partial."
      },
      {
        id: "56",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "57",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "58",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "59",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "60",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      },
      {
        id: "61",
        category: "Travel",
        imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
        title: "World Tour",
        description:
        "These solo female travelers are an inspiration giving travel tips and advice on traveling the world solo while empowering women. We have met nearly every one of these amazing travel exerpts and they are as nice in person as they are on their blogs.",
      }
    
      ]);
})

app.listen(PORT, () => {
    console.log("Server running at http://localhost:9000");
});
