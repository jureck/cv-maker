import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";

import { styles } from "../styles";

const Template1 = ({ template, personal, schools, works, languages, skills }) => {
    return (
        <Page size="A4" style={styles[1].page}>
            <View
                style={{
                    ...styles[1].leftPanel,
                    backgroundColor: template.color,
                }}
            >
                {personal.photo ? <Image style={styles[1].photo} src={personal.photo} /> : null }
                <View style={styles[1].personalData}>
                    <View style={styles[1].name}>
                        <Text>{personal.name}</Text>
                        <Text>{personal.surname}</Text>
                    </View>
                    <View style={styles[1].info}>
                        <Text>{personal.email}</Text>
                        <Text>{personal.phone}</Text>
                        <Text>{personal.city}</Text>
                    </View>
                </View>

                <Text style={styles[1].header}>
                    {languages.length > 0 && "Languages"}
                </Text>
                <View style={styles[1].languages}>
                    {languages.map((language, q) => {
                        return (
                            <View key={q} style={styles[1].languageElement}>
                                <Text style={styles[1].languageName}>
                                    {language.language}
                                </Text>
                                <Text style={styles[1].languageLevel}>
                                    - {language.level}
                                </Text>
                            </View>
                        );
                    })}
                </View>

                <Text style={styles[1].header}>
                    {skills.length > 0 && "Additional skills"}
                </Text>
                {skills.map((skill, q) => {
                    return <Text key={q}>{skill.skill}</Text>;
                })}
            </View>

            <View style={styles[1].rightPanel}>
                <Text style={styles[1].header}>
                    {schools.length > 0 && "Education"}
                </Text>
                <View style={styles[1].education}>
                    {schools.map((school) => {
                        return (
                            <View style={styles[1].educationElement}>
                                <View style={styles[1].educationYears}>
                                    <Text>
                                        {school.from} - {school.to}
                                    </Text>
                                </View>
                                <View style={styles[1].educationSchools}>
                                    <Text style={styles[1].educationSchoolName}>
                                        {school.name}
                                    </Text>
                                    <Text style={styles[1].educationSpec}>
                                        {school.major}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>

                <Text style={styles[1].header}>
                    {works.length > 0 && "Work experience"}
                </Text>
                <View style={styles[1].work}>
                    {works.map((work) => {
                        return (
                            <View style={styles[1].workElement}>
                                <View style={styles[1].workYears}>
                                    <Text>
                                        {work.monthFrom}/{work.yearFrom} -{" "}
                                        {work.monthTo}/{work.yearTo}
                                    </Text>
                                </View>
                                <View style={styles[1].workInfo}>
                                    <Text style={styles[1].workPosition}>
                                        {work.position}
                                    </Text>
                                    <Text style={styles[1].workCompanyName}>
                                        {work.name}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </Page>
    );
};

export default Template1;
