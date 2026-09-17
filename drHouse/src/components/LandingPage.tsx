
import { HeroSection } from './hero_section/HeroSection';
import { SearchBar } from './search_bar/SearchBar';
import { FeatureSection } from './feature_section/FeatureSection';
import { AboutSection } from './about_section/AboutSection';
import { CoreSection } from './corevalue_section/CoreSection';
import { ResidenceSection } from './popular_residents_section/ResidenceSection';
import { StatSection } from './static_section/StatSection';
import { CallToAction } from './call_to_action/CallToAction';
import { FooterSection } from './footer/FooterSection';
import styled from 'styled-components';

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const LandingPage = () => {
    return (
        <>
            <Landing>
                <HeroSection />
                <SearchBar />
                <FeatureSection /> 
                <AboutSection /> 
                <CoreSection /> 
                <ResidenceSection />
                <StatSection />
                <CallToAction />
                <FooterSection />
            </Landing>     
        </>
    );
}