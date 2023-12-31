export class Player {
	name: string;
	character: string;

	static Builder = class PlayerBuilder {
		private name!: string;
		private character!: string;

		setName(value: string): PlayerBuilder {
			this.name = value;
			return this;
		}

		setCharacter(value: string): PlayerBuilder {
			this.character = value;
			return this;
		}

		build(): Player {
			return new Player(this.name, this.character);
		}
	};

	private constructor(name: string, character: string) {
		this.name = name;
		this.character = character;
	}
}
