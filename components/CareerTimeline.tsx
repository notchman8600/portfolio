import { styled } from "@linaria/react";
import type { CareerEntry } from "@/data/resume";

interface Props {
  entries: CareerEntry[];
}

export const CareerTimeline = ({ entries }: Props) => {
  return (
    <Timeline>
      {entries.map((entry) => (
        <Item key={`${entry.org}-${entry.period}`}>
          <Period>
            {entry.period}
            {entry.current && <CurrentBadge>現在</CurrentBadge>}
          </Period>
          <Body>
            <Org>
              {entry.url ? (
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  {entry.org}
                </a>
              ) : (
                entry.org
              )}
            </Org>
            <Role>{entry.role}</Role>
            <Desc>{entry.description}</Desc>
          </Body>
        </Item>
      ))}
    </Timeline>
  );
};

const Timeline = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1.5rem;
  padding: 1.25rem 0;
  border-left: 3px solid #e5e7eb;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 1.65rem;
    width: 13px;
    height: 13px;
    border-radius: 9999px;
    background-color: #0070f3;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Period = styled.div`
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
  padding-top: 0.15rem;
`;

const CurrentBadge = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.05rem 0.5rem;
  border-radius: 9999px;
  background-color: #dbeafe;
  color: #1d4ed8;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Body = styled.div`
  text-align: left;
`;

const Org = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Role = styled.p`
  margin: 0.25rem 0 0.5rem 0;
  font-size: 0.95rem;
  color: #4b5563;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
`;
