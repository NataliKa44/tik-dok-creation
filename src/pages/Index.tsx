import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videos = [
    {
      id: 1,
      title: "Танцевальный челлендж #ТипТокВайб",
      author: "DanceQueen",
      likes: "156.2K",
      comments: "8.9K",
      shares: "2.1K",
      followers: "45.6K",
      description: "Новый хит сезона! Повторяй движения 🕺",
      music: "Трендовый трек - Популярный исполнитель",
      hashtags: ["#танцы", "#челлендж", "#тренд", "#ТипТок"],
      earnings: "₽12,340",
    },
    {
      id: 2,
      title: "Кулинарный лайфхак за 30 секунд",
      author: "ChefMaster",
      likes: "89.4K",
      comments: "3.2K",
      shares: "1.8K",
      followers: "128.3K",
      description: "Простой рецепт, который изменит твою жизнь! 👨‍🍳",
      music: "Кулинарная мелодия - Шеф",
      hashtags: ["#кулинария", "#лайфхак", "#рецепт", "#еда"],
      earnings: "₽8,670",
    },
  ];

  const trends = [
    { name: "#ТипТокВайб", views: "2.8M", growth: "+15%" },
    { name: "#ЗимнийЧеллендж", views: "1.4M", growth: "+23%" },
    { name: "#КулинарныеСекреты", views: "956K", growth: "+8%" },
    { name: "#ТанцыДома", views: "745K", growth: "+12%" },
  ];

  const currentVid = videos[currentVideo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex">
      {/* Боковая панель навигации */}
      <div className="w-64 bg-gray-950/80 backdrop-blur-sm border-r border-gray-800 p-6 space-y-6">
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="Play" size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
            ТипТок
          </h1>
        </div>

        {/* Навигация */}
        <nav className="space-y-2">
          {[
            { icon: "Home", label: "Главная", active: true },
            { icon: "Compass", label: "Обзор" },
            { icon: "Users", label: "Подписки" },
            { icon: "TrendingUp", label: "Тренды" },
            { icon: "Heart", label: "Понравившиеся" },
            { icon: "Bookmark", label: "Сохранённые" },
          ].map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start space-x-3 ${
                item.active
                  ? "bg-pink-600/20 text-pink-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>

        {/* Создать контент */}
        <div className="mt-8">
          <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <Icon name="Plus" size={20} className="mr-2" />
            Создать
          </Button>
        </div>

        {/* Тренды */}
        <Card className="bg-gray-800/50 backdrop-blur border-gray-700/50 p-5">
          <h3 className="font-semibold mb-4 text-white flex items-center">
            <span className="text-orange-400 mr-2">🔥</span>
            Тренды
          </h3>
          <div className="space-y-3">
            {trends.map((trend, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-pink-400">
                    {trend.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {trend.views} просмотров
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-600/20 text-green-400"
                >
                  {trend.growth}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Статистика пользователя */}
        <Card className="bg-gray-800/50 backdrop-blur border-gray-700/50 p-5">
          <h3 className="font-semibold mb-4 text-white flex items-center">
            <span className="text-green-400 mr-2">💰</span>
            Ваша статистика
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Подписчики</span>
              <span className="text-sm font-medium">12.4K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Доходы</span>
              <span className="text-sm font-medium text-green-400">
                ₽25,680
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Просмотры</span>
              <span className="text-sm font-medium">1.2M</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Основная лента видео */}
      <div className="flex-1 relative">
        <div className="h-screen overflow-hidden">
          <div className="relative h-full bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
            {/* Видео контейнер */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden relative shadow-2xl border border-gray-700/30">
                {/* Фейк видео */}
                <div className="h-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center relative z-10">
                    <Icon
                      name={isPlaying ? "Pause" : "Play"}
                      size={48}
                      className="text-white/80 mb-4"
                    />
                    <p className="text-white/60">Видео #{currentVid.id}</p>
                  </div>
                </div>

                {/* Overlay с информацией */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center space-x-3 mb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-pink-600 text-white">
                        {currentVid.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{currentVid.author}</p>
                      <p className="text-xs text-gray-300">
                        {currentVid.followers} подписчиков
                      </p>
                    </div>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      Подписаться
                    </Button>
                  </div>

                  <p className="text-sm mb-2">{currentVid.description}</p>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {currentVid.hashtags.map((tag, index) => (
                      <span key={index} className="text-xs text-pink-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <Icon name="Music" size={12} />
                    <span>{currentVid.music}</span>
                  </div>
                </div>

                {/* Кнопка воспроизведения */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon
                    name={isPlaying ? "Pause" : "Play"}
                    size={32}
                    className="text-white"
                  />
                </Button>
              </div>
            </div>

            {/* Боковая панель действий */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
              <div className="flex flex-col items-center space-y-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex flex-col space-y-1 hover:bg-white/10"
                >
                  <Icon name="Heart" size={24} className="text-white" />
                  <span className="text-xs text-white">{currentVid.likes}</span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex flex-col space-y-1 hover:bg-white/10"
                >
                  <Icon name="MessageCircle" size={24} className="text-white" />
                  <span className="text-xs text-white">
                    {currentVid.comments}
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex flex-col space-y-1 hover:bg-white/10"
                >
                  <Icon name="Share" size={24} className="text-white" />
                  <span className="text-xs text-white">
                    {currentVid.shares}
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex flex-col space-y-1 hover:bg-white/10"
                >
                  <Icon
                    name="DollarSign"
                    size={24}
                    className="text-green-400"
                  />
                  <span className="text-xs text-green-400">
                    {currentVid.earnings}
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex flex-col space-y-1 hover:bg-white/10"
                >
                  <Icon
                    name="MoreHorizontal"
                    size={24}
                    className="text-white"
                  />
                </Button>
              </div>
            </div>

            {/* Переключение видео */}
            <div className="absolute right-1/2 transform translate-x-1/2 bottom-4 flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentVideo(
                    currentVideo === 0 ? videos.length - 1 : currentVideo - 1,
                  )
                }
                className="bg-black/50 border-gray-600"
              >
                <Icon name="ChevronUp" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentVideo((currentVideo + 1) % videos.length)
                }
                className="bg-black/50 border-gray-600"
              >
                <Icon name="ChevronDown" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Правая панель аналитики */}
      <div className="w-80 bg-gray-950/80 backdrop-blur-sm border-l border-gray-800 p-6 space-y-6">
        <Card className="bg-gray-800 border-gray-700 p-4">
          <h3 className="font-semibold mb-3 text-white flex items-center">
            <Icon name="BarChart3" size={20} className="mr-2 text-pink-400" />
            Живая аналитика
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Просмотры сейчас</span>
              <span className="text-sm font-medium text-green-400">+847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Новые подписчики</span>
              <span className="text-sm font-medium text-blue-400">+23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Доходы за час</span>
              <span className="text-sm font-medium text-green-400">₽456</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700 p-4">
          <h3 className="font-semibold mb-3 text-white flex items-center">
            <Icon name="Users" size={20} className="mr-2 text-purple-400" />
            Активные зрители
          </h3>
          <div className="space-y-2">
            {["User123", "DanceFan", "VideoLover", "TrendFollower"].map(
              (user, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">{user}</span>
                </div>
              ),
            )}
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700 p-4">
          <h3 className="font-semibold mb-3 text-white flex items-center">
            <Icon
              name="MessageSquare"
              size={20}
              className="mr-2 text-yellow-400"
            />
            Комментарии
          </h3>
          <div className="space-y-3 max-h-40 overflow-y-auto">
            {[
              { user: "FanGirl", text: "Обожаю этот трек! 🔥", time: "1м" },
              { user: "DanceKing", text: "Повторил движения!", time: "2м" },
              {
                user: "MusicLover",
                text: "Где скачать эту песню?",
                time: "5м",
              },
            ].map((comment, index) => (
              <div key={index} className="text-xs">
                <p className="text-pink-400 font-medium">{comment.user}</p>
                <p className="text-gray-300">{comment.text}</p>
                <p className="text-gray-500">{comment.time} назад</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700 p-4">
          <h3 className="font-semibold mb-3 text-white flex items-center">
            <Icon name="Gift" size={20} className="mr-2 text-yellow-400" />
            Донаты и подарки
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">💎 Алмаз</span>
              <span className="text-yellow-400">₽50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">🌹 Роза</span>
              <span className="text-pink-400">₽20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">⭐ Звезда</span>
              <span className="text-blue-400">₽30</span>
            </div>
          </div>
          <Button
            size="sm"
            className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
          >
            <Icon name="Gift" size={16} className="mr-2" />
            Отправить подарок
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
