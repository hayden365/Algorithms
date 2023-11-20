# 연산 횟수는 이동 횟수에 비례하게 된다. 예를 들어, 이동 횟수가 N번인 경우 시간 복잡도는 O(N)이다.
# 일련의 명령에 따라서 개체를 차례대로 이동시킨다는 점에서 시뮬레이션 유형으로 분류된다.

n = int(input())
x,y = 1, 1
plans = input().split()

# L, R, U, D에 따른 이동 방향
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for plan in plans:
  for i in range(len(move_types)):
    if plan == move_types[i]:
      nx = x + dx[i]
      ny = y + dy[i]
    if nx < 1 or ny < 1 or nx > n ny > n:
      continue
    x,y = nx, ny

print(x, y)
