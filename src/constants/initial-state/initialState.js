
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

  showExperience: false,
  experience: [
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
    },
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
      key: 'ntt',
      company: 'NTT Data',
      title: 'Java 6 : Spring MVC Developer',
      location: {
        lat: 44.6508,
        lng: -63.5771
      },
      center: {
        lat: 44.6488,
        lng: -63.5752
      },
      date: {
        start: '01/01/2015',
        end: '12/31/2015'
      }
    },
    {
      key: 'inf',
      company: 'Infusion',
      title: 'Front End Consultant',
      location: {
        lat: 43.6471382,
        lng: -79.38270360000001
      },
      center: {
        lat: 43.6532,
        lng: -79.3832
      },
      date: {
        start: '01/01/2016',
        end: '05/30/2017'
      }
    },
    {
      key: 'cap',
      company: 'Capco',
      title: 'Front End Consultant',
      location: {
        lat: 43.649722,
        lng: -79.376207
      },
      center: {
        lat: 43.6532,
        lng: -79.3832
      },
      date: {
        start: '06/01/2017',
        end: '10/31/2017'
      }
    },
    {
      key: 'hdc',
      company: 'Home Depot Canada',
      title: 'Sr Front End Developer',
      location: {
        lat: 43.728811,
        lng: -79.329219
      },
      center: {
        lat: 43.7615,
        lng: -79.4111
      },
      date: {
        start: '11/01/2017',
        end: 'Present'
      }
    }
  ]
};