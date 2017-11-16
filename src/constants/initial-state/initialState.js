
export const initialState = {
  selectedTile: 0,
  categories: [
    {
      title: 'About Me',
      key: 'aboutMe',
      selected: false,
      iconIndex: 1
    },
    {
      title: 'Experience',
      key: 'experience',
      selected: false,
      iconIndex: 2
    },
    {
      title: 'Education',
      key: 'education',
      selected: false,
      iconIndex: 3
    },
    {
      title: 'skills',
      key: 'skills',
      selected: false,
      iconIndex: 4
    }
  ],

  showExperience : false,
  experience: [

    {
      key: 'sfw',
      company: 'Safeway',
      title: 'Fullstack ASP.NET developer',
      location: {
        lat: 51.111412,
        lng: -114.039921
      },
      center: {
        lat: 51.0486,
        lng: -114.0708
      },
      date: {
        start: '10/01/2014',
        end: '1/05/2015'
      }
    },
    {
      key: 'gnx',
      company: 'GreenNexxus',
      title: 'Fullstack ASP.NET developer',
      location: {
        lat: 45.9607044,
        lng: -66.6415046
      },
      center: {
        lat: 45.9636,
        lng: -66.6431
      },
      date: {
        start: '04/01/2013',
        end: '07/05/2014'
      }
    }
  ]
};