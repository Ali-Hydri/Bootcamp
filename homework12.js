class EmojiChanger {
  constructor() {
    this.emojis = ["😉", "😜", "😠", "😄", "😢", "😍", "🤔", "🤓", "😴", "😵"];
    this.defaultEmoji = "😂";
    this.repeat = 10;
  }

  startChange() {
    let count = 0;

    const repeatEmoji = () => {
      if (count >= this.repeat) {
        console.log("End");
        return;
      }

      console.clear();
      console.log(this.defaultEmoji);

      setTimeout(() => {
        console.clear();
        const randomEmojiNumber = Math.floor(
          Math.random() * this.emojis.length
        );
        //  console.log(this.emojis[randomEmojiNumber]); :بجای سوییچ کیس میتونستیم بگیم
        let selectedEmoji;
        switch (randomEmojiNumber) {
          case 0:
            selectedEmoji = this.emojis[0];
            break;
          case 1:
            selectedEmoji = this.emojis[1];
            break;
          case 2:
            selectedEmoji = this.emojis[2];
            break;
          case 3:
            selectedEmoji = this.emojis[3];
            break;
          case 4:
            selectedEmoji = this.emojis[4];
            break;
          case 5:
            selectedEmoji = this.emojis[5];
            break;
          case 6:
            selectedEmoji = this.emojis[6];
            break;
          case 7:
            selectedEmoji = this.emojis[7];
            break;
          case 8:
            selectedEmoji = this.emojis[8];
            break;
          case 9:
            selectedEmoji = this.emojis[9];
            break;
          default:
            selectedEmoji = this.defaultEmoji;
        }

        console.log(selectedEmoji);

        setTimeout(() => {
          console.clear();
          console.log(this.defaultEmoji);
          count++;
          repeatEmoji();
        }, 500);
      }, 500);
    };

    repeatEmoji();
  }
}

const emojiChanger = new EmojiChanger();
emojiChanger.startChange();
