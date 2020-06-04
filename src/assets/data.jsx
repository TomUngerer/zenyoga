import imagePlaceholder from '../assets/placeholder.jpg'
import imagePlaceholder2 from '../assets/placeholder2.jpg'

const data = {
  features: [
    {
      id: 1,
      title: "New classes every week",
      icon: imagePlaceholder,
      content:
        "Discover hundreds of classes in our library. Save your favorites. Try new styles and customize your routine to fit your schedule.",
    },
    {
      id: 2,
      title: "Series",
      icon: imagePlaceholder,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Pose directory",
      icon: imagePlaceholder,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
  classes: [
    {
      id: 1,
      title: "Healthy happy hour",
      video: {
        url: imagePlaceholder,
        duration: "45min",
      },
      category: "Meditation",
      excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      level: 2,
    },
    {
      id: 2,
      title: "Strong sweaty flow",
      video: {
        url: imagePlaceholder,
        duration: "60min",
      },
      category: "Weight Loss",
      exerpt: "",
      level: 1,
    },
    {
      id: 3,
      title: "Core flow",
      video: {
        url: imagePlaceholder,
        duration: "60min",
      },
      category: "Meditation",
      exerpt: "",
      level: 3,
    },
    {
      id: 4,
      title: "Core flow",
      video: {
        url: imagePlaceholder,
        duration: "120min",
      },
      category: "Meditation",
      exerpt: "",
      level: 2,
    },
  ],
  services: [
    {
      id: 1,
      image: {
        url: imagePlaceholder,
      },
      title: "Beginner",
      excerpt: "",
    },
    {
      id: 2,
      image: {
        url: imagePlaceholder2,
      },
      title: "Meditation",
      excerpt: "",
    },
    {
      id: 3,
      image: {
        url: imagePlaceholder,
      },
      title: "Energy Balancing",
      excerpt: "",
    },
    {
      id: 4,
      image: {
        url: imagePlaceholder,
      },
      title: "Weight Loss",
      excerpt: "",
    },
    {
      id: 5,
      image: {
        url: imagePlaceholder,
      },
      title: "Recovery",
      excerpt: "",
    },
    {
      id: 6,
      image: {
        url: imagePlaceholder,
      },
      title: "All Levels",
      excerpt: "",
    },
  ],
};

export default data