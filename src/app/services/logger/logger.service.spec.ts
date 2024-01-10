import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  it('should start with no message', () => {
    const loggerService = new LoggerService();
    let messagesCount = loggerService.messages.length;
    expect(messagesCount).toBe(0);
  });
});
