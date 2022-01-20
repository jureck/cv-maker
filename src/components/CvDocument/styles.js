import { Font, StyleSheet } from '@react-pdf/renderer';


export const styles = StyleSheet.create({
    0: {
      page: {
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          padding: 30,
          fontFamily: 'Open Sans',
          fontSize: 15
        },
        personalData: {
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        name: {
          fontWeight: 'bold',
          marginBottom: 20,
          fontSize: 22
        },
        educationElement: {
          flexDirection: 'row',
          marginTop: 5
        },
        educationSchools: {
          marginLeft: 10
        },
        educationSpec: {
          fontWeight: 'bold'
        },
        workElement: {
          flexDirection: 'row',
          marginTop: 5
        },
        workInfo: {
          marginLeft: 10
        },
        workPosition: {
          fontWeight: 'bold'
        },
        languageElement: {
          flexDirection: 'row'
        },
        languageName: {
          fontWeight: 'bold'
        },
        languageLevel: {
          marginLeft: 5
        },
        header: {
          marginTop: 20,
          marginBottom: 10,
          fontWeight: 'bold',
          fontSize: 20
        },
        photo: {
          height: 150
        }
    },
    1: {
      leftPanel: {
        flexDirection: 'column',
        height: '100%',
        width: '35%',
        padding: 20
      },
      rightPanel: {
        padding: 30,
        marginTop: 150
      },
      page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Open Sans',
        fontSize: 13
      },
      personalData: {
        marginBottom: 30,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      name: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 22
      },
      education: {
        marginBottom: 60
      },
      educationElement: {
        flexDirection: 'row',
        marginTop: 5
      },
      educationSchools: {
        marginLeft: 10,
        fontSize: 12
      },
      educationSchoolName: {
        fontWeight: 'bold'
      },
      workElement: {
        flexDirection: 'row',
        marginTop: 5
      },
      workInfo: {
        marginLeft: 10,
        fontSize: 12
      },
      educationYears: {
        fontSize: 12
      },
      workYears: {
        fontSize: 12
      },
      workPosition: {
        fontWeight: 'bold'
      },
      languageElement: {
        flexDirection: 'row'
      },
      languageName: {
        fontWeight: 'bold'
      },
      languageLevel: {
        marginLeft: 5
      },
      header: {
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20
      },
      photo: {
        width: "90%",
        height: 'auto',
        marginBottom: 10
      }
    }
  });

  Font.register({
    family: 'Open Sans',
    fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
    ]
    });