import React from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';

import { styles } from './styles';

const CvDocument = ({ template, personal, schools, works, languages, skills }) => {
   
    if(template.number === "0") {
       
        return (
            <Document>
                <Page size="A4" style={styles[template.number].page}>

                <View style={styles[template.number].personalData}>
                    <View style={styles[template.number].userInfo}>
                    <View style={styles[template.number].name}>
                        <Text>{personal.name}</Text>
                        <Text>{personal.surname}</Text>
                    </View>
                    <View style={styles[template.number].info}>
                        <Text>{personal.email}</Text>
                        <Text>{personal.phone}</Text>
                        <Text>{personal.city}</Text>
                    </View>
                    </View>
                    <Image style={styles[template.number].photo} src={personal.photo}/>
                </View>

                <Text style={styles[template.number].header}>{schools.length > 0 && 'Education'}</Text>
                <View style={styles[template.number].education}>
                    {schools.map((school) => {
                        return  <View style={styles[template.number].educationElement}>
                                    <View style={styles[template.number].educationYears}>
                                        <Text>
                                            {school.from} - {school.to}
                                        </Text>
                                    </View>
                                    <View style={styles[template.number].educationSchools}>
                                        <Text style={styles[template.number].educationSpec}>
                                            {school.major}
                                        </Text>
                                        <Text style={styles[template.number].educationSchoolName}>
                                            {school.name}
                                        </Text>
                                    </View>
                                </View>
                    })}
                </View>

                <Text style={styles[template.number].header}>{works.length > 0 && 'Work experience'}</Text>
                <View style={styles[template.number].work}>
                    {works.map((work) => {
                        return  <View style={styles[template.number].workElement}>
                                    <View style={styles[template.number].workYears}>
                                        <Text>
                                            {work.monthFrom}/{work.yearFrom} - {work.monthTo}/{work.yearTo}
                                        </Text>
                                    </View>
                                    <View style={styles[template.number].workInfo}>
                                        <Text style={styles[template.number].workPosition}>
                                            {work.position}
                                        </Text>
                                        <Text style={styles[template.number].workCompanyName}>
                                            {work.name}
                                        </Text>
                                    </View>
                                </View>
                    })}
                </View>

                <Text style={styles[template.number].header}>{languages.length > 0 && 'Languages'}</Text>
                <View style={styles[template.number].languages}>
                    {languages.map((language) => {
                        return  <View style={styles[template.number].languageElement}>
                                    <Text style={styles[template.number].languageName}>
                                        {language.language}
                                    </Text>
                                    <Text style={styles[template.number].languageLevel}>
                                        {language.level}
                                    </Text>
                                </View>
                    })}
                </View>

                <Text style={styles[template.number].header}>{skills.length > 0 && 'Additional skills'}</Text>
                {skills.map((skill, q) => {
                    return <Text key={q}>{skill.skill}</Text>
                })}
                </Page>
            </Document>
        );
    } else if(template.number === "1") {
        return (
            <Document>
            <Page size="A4" style={styles[template.number].page}>
            <View style={{...styles[template.number].leftPanel, backgroundColor: template.color}}>
            <Image style={styles[template.number].photo} src={personal.photo}/>
            <View style={styles[template.number].personalData}>
                <View style={styles[template.number].name}>
                <Text>{personal.name}</Text>
                <Text>{personal.surname}</Text>
                </View>
                <View style={styles[template.number].info}>
                <Text>{personal.email}</Text>
                <Text>{personal.phone}</Text>
                <Text>{personal.city}</Text>
                </View>
            </View>

                <Text style={styles[template.number].header}>{languages.length > 0 && 'Languages'}</Text>
                <View style={styles[template.number].languages}>
                    {languages.map((language, q) => {
                        return  <View key={q} style={styles[template.number].languageElement}>
                                    <Text style={styles[template.number].languageName}>
                                        {language.language}
                                    </Text>
                                    <Text style={styles[template.number].languageLevel}>
                                        {language.level}
                                    </Text>
                                </View>
                    })}
                </View>

                <Text style={styles[template.number].header}>{skills.length > 0 && 'Additional skills'}</Text>
                {skills.map((skill, q) => {
                    return <Text key={q}>{skill.skill}</Text>
                })}

            </View>

            <View style={styles[template.number].rightPanel}>
            <Text style={styles[template.number].header}>{schools.length > 0 && 'Education'}</Text>
            <View style={styles[template.number].education}>
                {schools.map((school) => {
                    return  <View style={styles[template.number].educationElement}>
                                <View style={styles[template.number].educationYears}>
                                    <Text>
                                        {school.from} - {school.to}
                                    </Text>
                                </View>
                                <View style={styles[template.number].educationSchools}>
                                    <Text style={styles[template.number].educationSpec}>
                                        {school.major}
                                    </Text>
                                    <Text style={styles[template.number].educationSchoolName}>
                                        {school.name}
                                    </Text>
                                </View>
                            </View>
                })}
            </View>

            <Text style={styles[template.number].header}>{works.length > 0 && 'Work experience'}</Text>
            <View style={styles[template.number].work}>
                    {works.map((work) => {
                        return  <View style={styles[template.number].workElement}>
                                    <View style={styles[template.number].workYears}>
                                        <Text>
                                            {work.monthFrom}/{work.yearFrom} - {work.monthTo}/{work.yearTo}
                                        </Text>
                                    </View>
                                    <View style={styles[template.number].workInfo}>
                                        <Text style={styles[template.number].workPosition}>
                                            {work.position}
                                        </Text>
                                        <Text style={styles[template.number].workCompanyName}>
                                            {work.name}
                                        </Text>
                                    </View>
                                </View>
                    })}
            </View>

            </View>
        
            </Page>
            </Document>
        );
    } else return null;

}
 
export default CvDocument;