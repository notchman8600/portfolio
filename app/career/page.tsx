import { styled } from "@linaria/react";
import type { Metadata } from "next";
import Link from "next/link";
import { CareerTimeline } from "@/components/CareerTimeline";
import { createBreadcrumbJsonLd } from "@/components/jsonLd";
import { StructuredData } from "@/components/StructuredData";
import {
  affiliations,
  awards,
  careers,
  publications,
  talks,
} from "@/data/resume";
import { createPageMetadata } from "@/data/seo";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = createPageMetadata("/career");

export default function CareerPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://www.notchman.tech" },
    { name: "経歴", url: "https://www.notchman.tech/career" },
  ]);

  return (
    <>
      <StructuredData id="breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <main className={styles.main}>
        <h1 className={styles.title}>経歴</h1>
        <p className={styles.description}>
          これまでの所属と活動の記録です。詳細な職務経歴書は
          <a
            href="https://github.com/notchman8600/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          で公開しています。
        </p>

        <h2 className={styles.subtitle}>現在の所属</h2>
        <AffiliationList>
          <li>
            <a
              href="https://www.lycorp.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {affiliations.employer}
            </a>
          </li>
          <li>
            <a
              href={affiliations.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {affiliations.company}
            </a>
          </li>
          <li>
            {affiliations.university}（
            <a
              href={affiliations.labUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {affiliations.lab}
            </a>
            ）
          </li>
        </AffiliationList>

        <h2 className={styles.subtitle}>職務経歴</h2>
        <CareerTimeline entries={careers} />

        <h2 className={styles.subtitle}>研究業績</h2>
        <p className={styles.description}>
          研究分野はソーシャルネットワーク分析、計算社会学、強化学習です。
        </p>
        <RecordGrid>
          {publications.map((pub) => (
            <RecordCard key={pub.url}>
              <h3>{pub.venue}</h3>
              <p>
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              </p>
              <p>{pub.description}</p>
            </RecordCard>
          ))}
        </RecordGrid>

        <h2 className={styles.subtitle}>登壇実績</h2>
        <RecordGrid>
          {talks.map((talk) => (
            <RecordCard key={talk.url}>
              <h3>
                <a href={talk.url} target="_blank" rel="noopener noreferrer">
                  {talk.event}
                </a>
              </h3>
              <p>{talk.description}</p>
            </RecordCard>
          ))}
        </RecordGrid>

        <h2 className={styles.subtitle}>受賞・採択</h2>
        <RecordGrid>
          {awards.map((award) => (
            <RecordCard key={award.title}>
              <h3>
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noopener noreferrer">
                    {award.title}
                  </a>
                ) : (
                  award.title
                )}
              </h3>
              <small>{award.year}</small>
              {award.description && <p>{award.description}</p>}
            </RecordCard>
          ))}
        </RecordGrid>

        <p className={styles.description}>
          案件のご依頼を承っております。お気軽に
          <Link href="/contact">お問い合わせ</Link>ください。
        </p>
      </main>
    </>
  );
}

const AffiliationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 1.1rem;
  line-height: 2;
  color: #374151;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const RecordGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 1rem auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const RecordCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: left;

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #1f2937;
  }

  small {
    color: #6b7280;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #4b5563;
    margin: 0.5rem 0 0 0;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
