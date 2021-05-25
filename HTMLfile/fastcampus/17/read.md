CSS 속성 - 전환 & 변환

1. 전환
   CSS 속성의 시작과 끝을 지정하여 중간 값을 애니메이션
   애니메이션 값을 자연스럽게 줄 수 있다.
   특정한 속성만 적용시켜서 값을 줄 수 있다.
2. 변환 개요

3. 변환 2d속성
   translate - 이동 / position도 위치를 이동시킬 수 있는데 계속해서 움직임을 주는 것은 translate를 사용하는게 더 좋다.
   scale - 크기
   rotate - 회전
   skew - 기울기
   matrix - 2차원 변환 효과

4. 변환 3D속성
   2D속성과 property는 같지만 3차원버전이라 생각하면 된다. z축이 늘어난다.
   scss를 이용해서 할 수 있다.(아직 배우지 않았기 때문에..)
5. orgin
   요소 변환의 기준점을 설정
6. style
   3D변환 요소의 자식 요소도 3D변환을 사용할지 설정
7. perspective
   하위 요소를 관찰하는 원근 거리를 설정
8. perspective-orgin
   원근 거리의 기준점을 설정
9. backface-visibility
   3D변환으로 회전된 요소의 뒷면 숨김을 설정
10. martix()