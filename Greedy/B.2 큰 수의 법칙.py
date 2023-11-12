# 단순하게 푸는 법
n, m, k = map(int, input().split())

data = list(map(int, input().split()))

data.sort()
first = data[n-1]
second = data[n-2]

result = 0

while True:
  for i in range(k):
    if m == 0:
      break
    result += first
    m -= 1
  if m == 0:
    break
  result += second
  m -= 1

# m의 크기가 100억 이상처럼 커진다면 시간 초과 판정
# 가장 큰 수가 더해지는 횟수는 다음과 같다.
# M / K + 1 -> 수열이 반복되는 횟수
# (M / (K + 1)) * K -> 하나의 수열 안에서 가장 큰 수가 등장하는 횟수
# M % (K + 1) -> M이 K + 1로 나누어떨어지지 않는 경우 나머지만큼 가장 큰 수가 추가로 더해지므로 고려.
int(M / (K + 1)) * K + M % (K + 1)

n, m, k = map(int, input().split())

data = list(map(int, input().split()))

data.sort()
first = data[n-1]
second = data[n-2]

count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first
result += (m - count) * second

print(result)
