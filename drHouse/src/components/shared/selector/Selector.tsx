import styled from "styled-components";

interface SelectorProps {
  customBorderRadius?: string;
  customBorder?: string;
  customColor?: string;
  customBgColor?: string;
  customHeight?: string;
 
}

interface OptionProps{
    customColorOp?: string;
}

const SelectorContainer = styled.select<SelectorProps>`
    padding: 8px;
    border-radius: ${props => props.customBorderRadius || '4px'};
    border: ${props => props.customBorder || 'none'};
    font-size: 14px;
    color: ${props => props.customColor || 'white'};
    background-color: ${props => props.customBgColor || '#0A4174'};
    cursor: pointer;
    height: ${props => props.customHeight || 'auto'};
`;

const Option = styled.option<OptionProps>`
    color: ${props => props.customColorOp || 'white'};
    background-color: #4a7fa7;
    
`;

export const Selector = (details) => {

    const isCountry = details.type === "country" || (details.options && details.options[0]?.isoCode);

    const renderOptions = () => {
        return details.options?.map((item) => {
            let displayText = "";

            if (item.name) {
                displayText = item.name;
            } else if (details.type === "propertyType") {
                displayText = item.propertyType;
            } else if (details.type === "location") {
                displayText = `${item.location.city}, ${item.location.country}`;
            } else if (details.type === "price") {
                displayText = `${item.averagePrice} ${item.currency}`;
            }

            return (
                <Option 
                    key={item.isoCode || item.id} 
                    value={item.isoCode || item.id} 
                    customColorOp={isCountry ? 'black' : 'white'} 
                >
                    {displayText}
                </Option>
            );
        });
    }

    return (
        <SelectorContainer
            value={details.value}
            name={details.name}
            onChange={details.onChange}
            customBgColor={details.bgColor}
            customColor={details.color}
            customBorder={details.border}
            customHeight={details.height}
            customBorderRadius={details.radius}
        >
            <Option value="#" customColorOp={isCountry ? 'black' : 'white'} disabled>Choose</Option>
            {renderOptions()}
        </SelectorContainer>
    );
}