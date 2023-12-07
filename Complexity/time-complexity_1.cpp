#include<bits/stdc++.h>
using namespace std;
int n, cnt;
int main() {
  cin >> n;
  int a = 0;
  for (int i = 0; i < n; i++){
    for (int j = 0; j < i; j++){
      a += i + j;
      cnt++;
    }
  }
  cout << a << '\n';
  cout << " cnt : " << cnt << '\n';
  return 0;
}
/**
 * 시간복잡도는 계산
 * 손코딩을 해보았을 때 n이 3일 때, cnt = 3
 * n이 4일때, cnt = 6
 * n이 5일때, cnt 10
 * 이런 모양을 그림으로 만들어보면
 * 정사각형에서 절반 삼각형의 그림을 그릴 수 있다.
 * 여기서 < 미만 이므로 n만큼 갯수가 빠지게 된다.
 * 1/2(n^2 - n)
 * 위 식을 빅오 표기법으로 바꾸면 O(n^2)이 된다.
*/
