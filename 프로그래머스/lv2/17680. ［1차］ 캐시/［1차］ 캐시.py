def solution(cacheSize, cities):
    answer = 0
    cache = []
    for city in cities :
        city = city.lower()
        if city in cache:
            cache.remove(city)
            cache.append(city)
            answer += 1
            #참조하는 값이 캐시안에 있으면 해당 값을 캐시의 가장 최근 위치에 넣어준다.
        elif cacheSize == 0:
            answer = len(cities) * 5
        
        else:
            if len(cache) >= cacheSize:
                cache.pop(0)
            cache.append(city)
            answer += 5
            #참조하는 값이 캐시안에 없으면 가장 오래 전에 참조한 값을 빼고 현재 값을 캐시에 넣어준다.       
    return answer