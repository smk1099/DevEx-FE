import { Box, Typography } from "@mui/material";
import BaseBox from "../components/BaseBox";

const Home = () => {
  //홈페이지

  return (
    <BaseBox>
      <Box sx={{ width: "80%", boxSizing: "border-box" }}>
        <Box
          p={8}
          pt={15}
          minHeight={300}
          display="flex"
          justifyContent="space-between"
        >
          <Box component="img" src="image/IntroduceImg1.jpg" width="45%"></Box>
          <Box
            width="45%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h5" fontWeight={700}>
              서비스 소개
            </Typography>
            <Typography mt={2}>
              우리 서비스는 소규모 수출에 최적화된 견적을 비교할 수 있도록
              도와드립니다. <br /> 사용자는 수출업무에 필요한 최소한의 정보만을
              입력하여 즉시 다양한 물류 <br /> 업체로부터 경쟁력 있는 견적을
              받을 수 있습니다.
            </Typography>
          </Box>
        </Box>
        <Box
          p={8}
          minHeight={300}
          bgcolor="#f5f5f5"
          display="flex"
          justifyContent="space-between"
        >
          <Box
            width="45%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h5" fontWeight={700}>
              비전
            </Typography>
            <Typography mt={2}>
              우리의 솔루션은 해외 물류 서비스와 핸드캐리 업체와의 효과적인
              제휴를 통해 <br />
              다양하고 비용최적화된 수출 경로를 안내합니다. <br /> 이를 통해
              사용자들은 복잡한 물류 네트워크 속에서 소규모 수출에 대한 <br />{" "}
              간편한 솔루션을 찾을 수 있습니다. <br /> <br /> 우리는 대한민국의
              수출업계에 활력을 불어넣기 위해 소규모 수출의 활성화를 <br />{" "}
              목표로 삼고 있습니다. <br /> 중소기업 및 개별 사업자들이 우리
              서비스를 통해 효율적이고 경제적인 수출을 <br /> 실현함으로써 국가
              수출 업무의 호황을 이끌어내고자 합니다. <br /> <br /> 더불어,
              우리는 지속가능한 물류 및 수출 방법을 촉진하며, 사회적 가치를
              중시하는
              <br /> 솔루션을 제공하여 대한민국이 국제 무역에서 더욱 빛날 수
              있도록 지원하고자 합니다.
            </Typography>
          </Box>

          <Box component="img" src="image/IntroduceImg2.jpg" width="45%"></Box>
        </Box>
      </Box>
    </BaseBox>
  );
};

export default Home;
