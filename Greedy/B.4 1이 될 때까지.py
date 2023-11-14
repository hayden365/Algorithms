# 최대한 많이 나누기

# 단순하게 푸는 예시
n, k = map(int, input().split())
result = 0

while n >= k:
  while n % k != 0:
    n -= 1
    result += 1
  n //= k
  result += 1

while n > 1:
  n -= 1
  result += 1

print(result)

# N이 100억 이상의 큰 수가 되는 경우를 가정했을 때에도 빠르게 동작하려면,
# N이 K의 배수가 되도록 효율적으로 한 번에 빼는 방식으로 소스코드를 작성할 수 있다.

n, k = map(int, input().split())
result = 0

while True:
  target = (n // k) * k
  result += (n - target)
  n = target

  if n < k:
    break

  result += 1
  n //= k

result += (n - 1)
print(result)
