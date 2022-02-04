import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";

import { styles } from "../styles";

const Template0 = ({ personal, schools, works, languages, skills }) => {
    return (
        <Page size="A4" style={styles[0].page}>
            <View style={styles[0].personalData}>
                <View style={styles[0].userInfo}>
                    <View style={styles[0].name}>
                        <Text>{personal.name}</Text>
                        <Text>{personal.surname}</Text>
                    </View>
                    <View style={styles[0].info}>
                        <Text>{personal.email}</Text>
                        <Text>{personal.phone}</Text>
                        <Text>{personal.city}</Text>
                    </View>
                </View>
                {personal.photo ? <Image style={styles[0].photo} src={personal.photo} /> : null }
            </View>

            <Text style={styles[0].header}>
                {schools.length > 0 && "Education"}
            </Text>
            <View style={styles[0].education}>
                {schools.map((school) => {
                    return (
                        <View style={styles[0].educationElement}>
                            <View style={styles[0].educationYears}>
                                <Text>
                                    {school.from} - {school.to}
                                </Text>
                            </View>
                            <View style={styles[0].educationSchools}>
                                <Text style={styles[0].educationSchoolName}>
                                    {school.name}
                                </Text>
                                <Text style={styles[0].educationSpec}>
                                    {school.major}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <Text style={styles[0].header}>
                {works.length > 0 && "Work experience"}
            </Text>
            <View style={styles[0].work}>
                {works.map((work) => {
                    return (
                        <View style={styles[0].workElement}>
                            <View style={styles[0].workYears}>
                                <Text>
                                    {work.monthFrom}/{work.yearFrom} -{" "}
                                    {work.monthTo}/{work.yearTo}
                                </Text>
                            </View>
                            <View style={styles[0].workInfo}>
                                <Text style={styles[0].workPosition}>
                                    {work.position}
                                </Text>
                                <Text style={styles[0].workCompanyName}>
                                    {work.name}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <Text style={styles[0].header}>
                {languages.length > 0 && "Languages"}
            </Text>
            <View style={styles[0].languages}>
                {languages.map((language) => {
                    return (
                        <View style={styles[0].languageElement}>
                            <Text style={styles[0].languageName}>
                                {language.language}
                            </Text>
                            <Text style={styles[0].languageLevel}>
                                - {language.level}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <Text style={styles[0].header}>
                {skills.length > 0 && "Additional skills"}
            </Text>
            {skills.map((skill, q) => {
                return <Text key={q}>{skill.skill}</Text>;
            })}
        </Page>
    );
};

export default Template0;
