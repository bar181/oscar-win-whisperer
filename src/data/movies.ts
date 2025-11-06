import { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    rank: 1,
    title: "One Battle After Another",
    director: "Paul Thomas Anderson",
    overallScore: 8.2,
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    segments: [
      { 
        name: "Hollywood Traditionalist", 
        weight: "32.5%", 
        score: 88, 
        votes: { first: 35, second: 30, third: 20, fourth: 10, fifth: 5 } 
      },
      { 
        name: "Industry Craftsperson", 
        weight: "27.5%", 
        score: 82, 
        votes: { first: 30, second: 40, third: 20, fourth: 8, fifth: 2 } 
      },
      { 
        name: "Progressive Cinephile", 
        weight: "22.5%", 
        score: 64, 
        votes: { first: 15, second: 25, third: 35, fourth: 18, fifth: 7 } 
      },
      { 
        name: "Business-Minded Pragmatist", 
        weight: "17.5%", 
        score: 71, 
        votes: { first: 20, second: 35, third: 25, fourth: 15, fifth: 5 } 
      }
    ]
  },
  {
    rank: 2,
    title: "Sinners",
    director: "Ryan Coogler",
    overallScore: 7.8,
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    segments: [
      { 
        name: "Hollywood Traditionalist", 
        weight: "32.5%", 
        score: 68, 
        votes: { first: 8, second: 20, third: 30, fourth: 25, fifth: 17 } 
      },
      { 
        name: "Industry Craftsperson", 
        weight: "27.5%", 
        score: 77, 
        votes: { first: 18, second: 35, third: 28, fourth: 12, fifth: 7 } 
      },
      { 
        name: "Progressive Cinephile", 
        weight: "22.5%", 
        score: 83, 
        votes: { first: 35, second: 30, third: 20, fourth: 10, fifth: 5 } 
      },
      { 
        name: "Business-Minded Pragmatist", 
        weight: "17.5%", 
        score: 79, 
        votes: { first: 25, second: 30, third: 25, fourth: 15, fifth: 5 } 
      }
    ]
  },
  {
    rank: 3,
    title: "Hamnet",
    director: "Chloé Zhao",
    overallScore: 7.5,
    imageUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&h=600&fit=crop",
    segments: [
      { 
        name: "Hollywood Traditionalist", 
        weight: "32.5%", 
        score: 79, 
        votes: { first: 18, second: 32, third: 28, fourth: 15, fifth: 7 } 
      },
      { 
        name: "Industry Craftsperson", 
        weight: "27.5%", 
        score: 81, 
        votes: { first: 25, second: 35, third: 25, fourth: 10, fifth: 5 } 
      },
      { 
        name: "Progressive Cinephile", 
        weight: "22.5%", 
        score: 76, 
        votes: { first: 22, second: 30, third: 28, fourth: 15, fifth: 5 } 
      },
      { 
        name: "Business-Minded Pragmatist", 
        weight: "17.5%", 
        score: 68, 
        votes: { first: 12, second: 25, third: 30, fourth: 20, fifth: 13 } 
      }
    ]
  },
  {
    rank: 4,
    title: "Wicked: For Good",
    director: "Jon M. Chu",
    overallScore: 7.3,
    imageUrl: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=600&fit=crop",
    segments: [
      { 
        name: "Hollywood Traditionalist", 
        weight: "32.5%", 
        score: 74, 
        votes: { first: 12, second: 22, third: 30, fourth: 20, fifth: 16 } 
      },
      { 
        name: "Industry Craftsperson", 
        weight: "27.5%", 
        score: 86, 
        votes: { first: 28, second: 32, third: 25, fourth: 10, fifth: 5 } 
      },
      { 
        name: "Progressive Cinephile", 
        weight: "22.5%", 
        score: 66, 
        votes: { first: 8, second: 18, third: 28, fourth: 26, fifth: 20 } 
      },
      { 
        name: "Business-Minded Pragmatist", 
        weight: "17.5%", 
        score: 87, 
        votes: { first: 32, second: 28, third: 22, fourth: 12, fifth: 6 } 
      }
    ]
  },
  {
    rank: 5,
    title: "Bugonia",
    director: "Yorgos Lanthimos",
    overallScore: 7.1,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    segments: [
      { 
        name: "Hollywood Traditionalist", 
        weight: "32.5%", 
        score: 71, 
        votes: { first: 10, second: 20, third: 30, fourth: 25, fifth: 15 } 
      },
      { 
        name: "Industry Craftsperson", 
        weight: "27.5%", 
        score: 79, 
        votes: { first: 15, second: 28, third: 30, fourth: 18, fifth: 9 } 
      },
      { 
        name: "Progressive Cinephile", 
        weight: "22.5%", 
        score: 81, 
        votes: { first: 30, second: 28, third: 25, fourth: 12, fifth: 5 } 
      },
      { 
        name: "Business-Minded Pragmatist", 
        weight: "17.5%", 
        score: 65, 
        votes: { first: 8, second: 15, third: 28, fourth: 30, fifth: 19 } 
      }
    ]
  }
];