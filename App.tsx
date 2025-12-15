/**
 * Portfolio App - Anurag Rathore
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const SkillCard = ({skill, level}: {skill: string; level: string}) => {
  return (
    <View className="bg-gray-800 m-2 px-4 py-3 rounded-xl shadow-md border border-red-500">
      <Text className="text-white font-semibold text-base">
        {skill}
      </Text>
      <Text className="text-red-400 text-sm mt-1">
        {level}
      </Text>
    </View>
  );
};

const ExperienceCard = ({
  title,
  duration,
  description,
}: {
  title: string;
  duration: string;
  description: string;
}) => {
  return (
    <View className="bg-white mx-4 my-2 p-5 rounded-2xl shadow-lg border-l-4 border-red-600">
      <Text className="text-xl font-bold text-gray-900">
        {title}
      </Text>
      <Text className="text-red-600 font-semibold mt-1">
        {duration}
      </Text>
      <Text className="text-gray-700 mt-3 leading-6">
        {description}
      </Text>
    </View>
  );
};

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#DC2626"
      />
      <ScrollView
        className="bg-gray-900"
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        
        {/* Hero Section */}
        <View className="bg-red-600 pt-12 pb-16 px-6">
          <View className="items-center">
            <View className="w-32 h-32 rounded-full bg-gray-900 shadow-2xl items-center justify-center mb-6 border-4 border-white">
              <Text className="text-6xl">👨‍💻</Text>
            </View>
            <Text className="text-4xl font-bold text-white mb-2">
              Anurag Rathore
            </Text>
            <Text className="text-xl text-gray-100 font-semibold mb-4">
              Full Stack Developer
            </Text>
            <View className="bg-gray-900 px-6 py-2 rounded-full">
              <Text className="text-white font-semibold">
                1+ Year Experience
              </Text>
            </View>
          </View>
        </View>

        {/* About Section - White Background */}
        <View className="bg-white px-4 py-8">
          <Text className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </Text>
          <View className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-red-200">
            <Text className="text-gray-800 text-base leading-7">
              Passionate Computer Science Engineer specializing in Native and
              Web Development. With 1 year of hands-on experience, I craft
              high-performance mobile and web applications using cutting-edge
              technologies. I thrive on solving complex problems and delivering
              exceptional user experiences.
            </Text>
          </View>
        </View>

        {/* Skills Section - Dark Background */}
        <View className="bg-gray-900 px-4 py-8">
          <Text className="text-3xl font-bold text-white mb-4">
            Technical Skills
          </Text>

          <View className="mb-6">
            <Text className="text-xl font-semibold text-red-400 mb-3">
              Mobile Development
            </Text>
            <View className="flex-row flex-wrap">
              <SkillCard skill="React Native" level="Advanced" />
              <SkillCard skill="React Native CLI" level="Advanced" />
              <SkillCard skill="Expo" level="Intermediate" />
              <SkillCard skill="Android Development" level="Intermediate" />
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-semibold text-red-400 mb-3">
              Web Development
            </Text>
            <View className="flex-row flex-wrap">
              <SkillCard skill="React.js" level="Advanced" />
              <SkillCard skill="Next.js" level="Advanced" />
              <SkillCard skill="Node.js" level="Advanced" />
              <SkillCard skill="Express.js" level="Advanced" />
              <SkillCard skill="TypeScript" level="Intermediate" />
              <SkillCard skill="JavaScript" level="Advanced" />
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-semibold text-red-400 mb-3">
              Backend & Databases
            </Text>
            <View className="flex-row flex-wrap">
              <SkillCard skill="MongoDB" level="Advanced" />
              <SkillCard skill="PostgreSQL" level="Intermediate" />
              <SkillCard skill="RESTful APIs" level="Advanced" />
              <SkillCard skill="Redux" level="Advanced" />
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-semibold text-red-400 mb-3">
              Tools & Others
            </Text>
            <View className="flex-row flex-wrap">
              <SkillCard skill="Git/GitHub" level="Advanced" />
              <SkillCard skill="Tailwind CSS" level="Advanced" />
              <SkillCard skill="NativeWind" level="Advanced" />
              <SkillCard skill="CI/CD" level="Intermediate" />
            </View>
          </View>
        </View>

        {/* Experience Section - White Background */}
        <View className="bg-white px-4 py-8 mb-0">
          <Text className="text-3xl font-bold text-gray-900 mb-4">
            Experience
          </Text>
          <ExperienceCard
            title="Full Stack Developer"
            duration="1+ Year"
            description="Developed and maintained mobile applications using React Native and web applications with React.js/Next.js. Built robust backend systems with Node.js and Express. Implemented real-time features, payment integrations, and optimized application performance."
          />
        </View>

        {/* Footer Section - Dark with Red Accent */}
        <View className="bg-gray-900 py-12 px-6 items-center border-t-4 border-red-600">
          <Text className="text-3xl font-bold text-white mb-4">
            Let's Connect
          </Text>
          <Text className="text-gray-300 text-center text-base mb-6">
            Available for freelance projects and full-time opportunities
          </Text>
          <View className="bg-red-600 px-8 py-4 rounded-full shadow-xl">
            <Text className="text-white font-bold text-lg">
              Open to Work 🚀
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
