import { styled } from "@linaria/react";
import { SkillCard, SkillCardWithLink } from "@/components/SkillCard";

export const SkillCardsWithLink = ({ props }: any) => {
  return (
    <div>
      <GridContainerStyle>
        {props.map((value) => (
          <SkillCardWithLink
            key={value.url}
            title={value.title}
            desc={value.desc}
            url={value.url}
          ></SkillCardWithLink>
        ))}
      </GridContainerStyle>
    </div>
  );
};
export const SkillCards = ({ props }: any) => {
  return (
    <div>
      <GridContainerStyle>
        {props.map((value) => (
          <div key={value.url}>
            <SkillCard
              title={value.title}
              desc={value.desc}
              url={value.url}
            ></SkillCard>
          </div>
        ))}
      </GridContainerStyle>
    </div>
  );
};

const GridContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 1fr 1frで2列に等分 */
  grid-auto-rows: minmax(100px, auto); /* 各コンポーネントの高さを自動調整 */
  gap: 30px; /* 必要であればグリッドのギャップを設定 */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* スマートフォンの表示では1列に変更 */
  }
`;
