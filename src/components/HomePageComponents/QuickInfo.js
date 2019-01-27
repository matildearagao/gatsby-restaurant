import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components';
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title subtitle="let us tell you" title="Our mission"></Title>
                <QuickInfoWrapper>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque ipsam? Soluta accusamus odit iure quisquam. Repellendus, pariatur sint dolorem earum at error animi possimus, quod corrupti quidem explicabo aspernatur?</p>

                    <Link to="/about" style={{textDecoration: 'none'}}>
                        <SectionButton style={{margin: '2rem auto'}}>About </SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text{
        line-height: 2rem;
        color: ${styles.colors.mainBlack};
        word-spacing: 0.2rem
    }
    @media (min-width: 768px){
        width: 70%
    }
    @media (min-width: 992px){
        width: 60%
    }
`