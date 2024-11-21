import { useChatWebSocketContext } from 'routes/chat/contexts/chat-websocket-context';
import { ChatElement } from './chat-element';
import { AddFriendsButton } from './add-friends-button';
import { ChatListTitle } from './chat-list-title';
import { SearchTextField } from './search-text-field';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const ChatList = () => {
  const { chatRoomList } = useChatWebSocketContext();
  const [filteredChatRoomList, setFilteredChatRoomList] =
    useState(chatRoomList);
  const [searchText, setSearchText] = useState('');
  const userId = useSelector((state) => state.user.user?.id);

  useEffect(() => {
    if (searchText === '') {
      setFilteredChatRoomList(chatRoomList);
    } else {
      setFilteredChatRoomList(
        chatRoomList.filter((value) => {
          return value.participants.some((participant) =>
            participant.profile.nickname
              .toLowerCase()
              .includes(searchText.toLowerCase()),
          );
        }),
      );
    }
  }, [chatRoomList, searchText]);

  return (
    <section className="w-[400px] flex flex-col  h-[calc(100vh-80px)] overflow-y-auto border-r bg-[var(--background,#FFFFFF)]">
      <div className="h-[154px] flex flex-col items-center">
        <div className="p-6 w-full flex justify-between">
          <ChatListTitle />
          <AddFriendsButton />
        </div>
        <SearchTextField
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
      <div>
        {filteredChatRoomList &&
          filteredChatRoomList.map((value) => {
            const representativeParticipant =
              value.participants.length === 1
                ? value.participants[0]
                : value.participants.filter((value) => value.id !== userId)[0];
            return (
              <ChatElement
                key={value.id}
                chatRoomId={value.id}
                nickname={representativeParticipant.profile.nickname}
                profileImageId={parseInt(
                  representativeParticipant.profile.profilepic_id,
                )}
                lastMessage={value.last_message}
              />
            );
          })}
      </div>
    </section>
  );
};
