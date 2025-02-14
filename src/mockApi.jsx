export const fetchHospitalDetails = (clientId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const hospitals = {
          1: {
            clientId: 1,
            name: 'Medicare Hospital',
            subtitle: 'quality matters',
            iconUrl: 'https://t3.ftcdn.net/jpg/05/14/36/48/360_F_514364850_xLOQX6SOY2qcjAIcTowsi3xYvHmhmvs0.jpg',
            bgColor: '#bfd7fe',
          },
          2: {
            clientId: 2,
            name: 'Healthcare Hospital',
            subtitle: 'Health is Wealth',
            iconUrl: 'https://img.freepik.com/premium-vector/hospital-logo-vector_1277164-14255.jpg',
            bgColor: '#ffccae',
          },
        };
        resolve(hospitals[clientId]);
      }, 1000);
    });
  };
  
  export const fetchDoctorList = (clientId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doctors = {
          1: {
            data: [
              {
                name: 'Dr. John Doe',
                fees: '$100',
                timing: '10 AM - 6 PM',
                days: 'Mon, Wed, Fri',
                contact: '+1 123 456 7890',
              },
              {
                name: 'Dr. Jane Smith',
                fees: '$120',
                timing: '9 AM - 5 PM',
                days: 'Tue, Thu, Sat',
                contact: '+1 987 654 3210',
              },
            ],
          },
          2: {
            data: [
              {
                name: 'Dr. Alice Johnson',
                fees: '$150',
                timing: '8 AM - 4 PM',
                days: 'Mon, Tue, Wed',
                contact: '+1 555 555 5555',
              },
              {
                name: 'Dr. Bob Brown',
                fees: '$130',
                timing: '11 AM - 7 PM',
                days: 'Thu, Fri, Sat',
                contact: '+1 666 666 6666',
              },
            ],
          },
        };
        resolve(doctors[clientId]);
      }, 1000);
    });
  };